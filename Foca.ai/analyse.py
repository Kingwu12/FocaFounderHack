import openai
import base64
import os
from dotenv import load_dotenv

load_dotenv()

# send the Captured Image to OpenAI's API for Analysis
<<<<<<< HEAD
openai.api_key = os.getenv("OPEN_AI_KEY")
=======
openai.api_key = os.getenv("OPENAI_API_KEY")
>>>>>>> origin/main

def analyse_image(image_path, user_goal):
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

    response = openai.chat.completions.create(
        model="gpt-4o", 
        messages=[
            {"role": "system", "content": "You are an assistant that analyzes images."},
            {"role": "user", "content": 
                [
                {'type': 'text', 'text' : f"Analyze the following image and determine if it matches the user's goal: {user_goal}. Provide an explanation and then reply with 'true' or 'false' on a new line."},
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
    # print("Message Content:", message_content)
    
    # Split the response into explanation and true/false answer
    lines = message_content.split('\n')
    explanation = lines[0].strip()  # The explanation
    result = lines[-1].strip()  # The true/false answer
    
    return result, explanation















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
