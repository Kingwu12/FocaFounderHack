import time
from capture import start_capturing
from analyse import analyse_image
from database import save_to_database
from utils.setup_database import setup_database

def main():
    setup_database()  
    user_goal = 'working on Coding'
    try:
        while True:
            image_path = start_capturing()
            #result='True'
            result, explaination = analyse_image(image_path, user_goal)
            save_to_database(time.strftime('%Y-%m-%d_%H-%M-%S'), image_path, user_goal, result)
            print(f"Explanation: {explaination}")  # DEBUGGING: print the explanation from OpenAI API response
            print(f"User on task: {result}")
            time.sleep(5)
    except KeyboardInterrupt:
        print("Script terminated by user. Exiting...")

if __name__ == "__main__": 
    main()

# {ctrl + c} in terminal to stop script


