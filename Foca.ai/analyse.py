import openai
import base64
import os
from dotenv import load_dotenv

load_dotenv()

# send the Captured Image to OpenAI's API for Analysis
<<<<<<< HEAD

=======
>>>>>>> origin/main
openai.api_key = os.getenv("OPENAI_API_KEY")

def analyse_image(image_path, user_goal):
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

    response = openai.chat.completions.create(
        model="gpt-4o", 
        messages=[
            {"role": "system", "content": "You are an assistant that analyzes images."},
            {"role": "user", "content": 
                [
                {'type': 'text', 'text' : f"Analyze the following image and determine if it matches the user's goal(return true or false): {user_goal}. Provide an explanation and then reply with 'true' or 'false' on a new line  and on a new line also give the app name."},
                {'type':  'image_url', 'image_url': {'url': f"data:image/jpeg;base64,{encoded_string}"}}
                ]
            },
        ]
    )
    
    message_content =  response.choices[0].message.content.strip().lower()
    
    
    # # DEBUGGER - shows explaination and result (true/false) from the API response
    # print("API Response:", response)
    # # Access the response correctly 
    # message_content = response.choices[0].message.content.strip().lower()
    print("Message Content:", message_content)
    
    # Split the response into explanation and true/false answer
    lines = message_content.split('\n')
    explanation = lines[0].strip()  # The explanation
    result = lines[-2].strip()  # The true/false answer
    app_name = lines[-1].strip() # The
    
    return result, explanation,app_name









# sample openai API response: 
# {
#   "id": "chatcmpl-123",
#   "object": "chat.completion",
#   "created": 1677652288,
#   "model": "gpt-4o-mini",
#   "system_fingerprint": "fp_44709d6fcb",
#   "choices": [{
#     "index": 0,
#     "message": {
#       "role": "assistant",
#       "content": "\n\nThis image shows a wooden boardwalk extending through a lush green marshland.",
#     },
#     "logprobs": null,
#     "finish_reason": "stop"
#   }],
#   "usage": {
#     "prompt_tokens": 9,
#     "completion_tokens": 12,
#     "total_tokens": 21
#   }
# }










#import openai
#import base64
#import os
#from dotenv import load_dotenv

#load_dotenv()

# send the Captured Image to OpenAI's API for Analysis
#openai.api_key = os.getenv("OPENAI_API_KEY")

#def analyse_image(image_path, user_goal):
    #with open(image_path, "rb") as image_file:
        #encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

    r#esponse = openai.chat.completions.create(
       # model="gpt-4o", 
       # messages=[
         #   {"role": "system", "content": "You are an assistant that analyzes images."},
          #  {"role": "user", "content": 
           #     [
           #     {'type': 'text', 'text' : f"Analyze the following image and determine the following and give me an ouput in this format {user_goal}. see the user goal provided answer in True or False, explain the app or website being used and laslty name the app or website in use. do the following in this format: TRUE/FALSE, explaination, app "},
            #    {'type':  'image_url', 'image_url': {'url': f"data:image/jpeg;base64,{encoded_string}"}}
            #    ]
            #},
        #]
    #)
   # message_content =  response.choices[0].message.content.strip().lower()
    
    
    # # DEBUGGER - shows explaination and result (true/false) from the API response
    # print("API Response:", response)
    # # Access the response correctly 
    # message_content = response.choices[0].message.content.strip().lower()
    # print("Message Content:", message_content)
    
    # Split the response into explanation and true/false answer
    #lines = message_content.split('\n')
    #explanation = lines[0].strip()  # The explanation
    #result = lines[-1].strip()  # The true/false answer
    
    #return result, explanation



