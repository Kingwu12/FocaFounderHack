import time
import mss
import mss.tools
from PIL import Image
import openai
import base64 
import sqlite3
import os


# STEP 0: setup the database
from utils.setup_database import setup_database

# STEP 1: capture screen 
def capture_screen():
    with mss.mss() as sct:
        monitor = sct.monitors[1]
        screenshot = sct.grab(monitor)
        img = Image.frombytes('RGB', screenshot.size, screenshot.bgra, 'raw', 'BGRX')
        return img

    
def start_capturing():
    img = capture_screen()
    timestamp = time.strftime('%Y-%m-%d_%H-%M-%S')
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)
    
    # Numbering  of screenshots
    existing_files = os.listdir(screenshots_dir)
    max_number = 0
    for filename in existing_files:
        if filename.startswith('screenshot_') and filename.endswith('.png'):
            try:
                number = int(filename.split('_')[1])
                if number > max_number:
                    max_number = number
            except ValueError:
                continue
    
    new_number = max_number + 1
    image_path = os.path.join(screenshots_dir, f'screenshot_{new_number}_{timestamp}.png')
    img.save(image_path)
    return image_path


# STEP 2: send the Captured Image to OpenAI's API for Analysis

def analyze_image(image_path):
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

    response = openai.Completion.create(
        engine="davinci",
        prompt=f"Analyze the following image and determine if it matches the user's goal: {encoded_string}",
        max_tokens=10
    )

    return response.choices[0].text.strip().lower() == 'true'

# STEP 3: save the Analysis Result to a Database
def save_to_database(timestamp, image_path, user_task, gpt_output):
    db_path = os.path.join(os.path.dirname(__file__), 'screen_tracker.db')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO productivity_data (timestamp, image_path, user_task, gpt_output)
        VALUES (?, ?, ?, ?)
    ''', (timestamp, image_path, user_task, gpt_output))
    conn.commit()
    conn.close()


# STEP 4: compare the Analysis Result with the User's Goal
def is_user_on_task(image_path, user_goal):
    result = analyze_image(image_path)
    return result == user_goal


# STEP 5: generate a Boolean Result
def main():
    setup_database()  
    user_goal = 'working on Coding'
    try:
        while True:
            image_path = start_capturing()
            on_task = is_user_on_task(image_path, user_goal)
            save_to_database(time.strftime('%Y-%m-%d %H:%M:%S'), image_path, user_goal, on_task)
            print(f"User on task: {on_task}")
            time.sleep(1)
    except KeyboardInterrupt:
        print("Script terminated by user. Exiting...")



# TIME TO RUN IT UP
if __name__ == "__main__":
    main()






