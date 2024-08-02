import time
import os
from PIL import Image
import mss

def capture_screen():
    with mss.mss() as sct:
        monitor = sct.monitors[1]
        screenshot = sct.grab(monitor)
        img = Image.frombytes('RGB', screenshot.size, screenshot.bgra, 'raw', 'BGRX')
        return img

def resize_image(img, max_size=(400, 400)):
    img.thumbnail(max_size)
    return img

def convert_image_to_jpeg(img, jpeg_path):
    img.convert('RGB').save(jpeg_path, 'JPEG', quality=85)

def start_capturing():
    img = capture_screen()
    timestamp = time.strftime('%Y-%m-%d_%H-%M-%S')
    screenshots_dir = os.path.join(os.path.dirname(__file__), '..', 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)
    
    # Numbering of screenshots
    existing_files = os.listdir(screenshots_dir)
    max_number = 0
    for filename in existing_files:
        if filename.startswith('screenshot_') and filename.endswith('.jpg'):
            try:
                number = int(filename.split('_')[1])
                if number > max_number:
                    max_number = number
            except ValueError:
                continue
    
    new_number = max_number + 1
    jpeg_path = os.path.join(screenshots_dir, f'screenshot_{new_number}_{timestamp}.jpg')
    
    # Resize and convert image
    img = resize_image(img)
    convert_image_to_jpeg(img, jpeg_path)
    
    return jpeg_path
