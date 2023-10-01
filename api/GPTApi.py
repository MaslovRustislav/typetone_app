import os
import openai
from dotenv import load_dotenv

load_dotenv()
async def getGPTAnswear(prompt) :
    openai.organization = "org-f0uXIXckWHqd0B6ss1rrOq9b"
    openai.api_key = os.getenv('GPT_API_KEY')
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[{"role":"user","content":prompt}],
    )
    return completion.choices[0].message.content
