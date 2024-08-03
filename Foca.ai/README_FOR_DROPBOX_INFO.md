 jpeg_path = os.path.join(screenshots_dir, f'screenshot_{new_number}_{timestamp}.jpg')
    dropbox_folder_path = '/Users/Sanketsushantpai/Sanketsushant18 Dropbox/Sanketsushant18 team folder' 
    # Resize and convert image
    img = resize_image(img)
    convert_image_to_jpeg(img, jpeg_path)
   
    
    # Extract file name from local_file_path
    file_name = os.path.basename(jpeg_path)
    
    # Define the destination path in the Dropbox folder
    destination_path = os.path.join(dropbox_folder_path, file_name)
    
    # Copy the file to Dropbox folder
    shutil.copy(jpeg_path, destination_path)
    
    print(f"File copied to {destination_path}")


    This is the coede that is being used to upload files into dropbox

    To make this work on you local machine change the path configuration on line 2 to whatever it is on your local machine.

    The rest shold stay the same.