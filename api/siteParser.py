import requests
from bs4 import BeautifulSoup

def parseSite() :
    def extractTextFromUrl(url):
        try:
            response = requests.get(url)

            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                extracted_text = soup.get_text(separator='\n')
                return extracted_text

            else:
                print(f"Failed to retrieve content. Status code: {response.status_code}")
                return None

        except Exception as e:
            print(f"An error occurred: {str(e)}")
            return None

    url = 'https://openai.com/'  
    extracted_text = extractTextFromUrl(url)

    if extracted_text:
        print('Extracted text from the page',extracted_text)
        return extracted_text
    else:
        print("Text extraction failed.")
