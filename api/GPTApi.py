import os
import openai
async def getGPTAnswear(prompt) :
    openai.organization = "org-f0uXIXckWHqd0B6ss1rrOq9b"
    openai.api_key = "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"
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role":"user","content":prompt}]
    )
    return completion.choices[0].message.content
