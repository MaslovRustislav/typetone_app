from fastapi import FastAPI ,Form, File, UploadFile , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from GPTApi import getGPTAnswear
import fitz  # PyMuPDF

app = FastAPI()
MAX_FILE_SIZE = 1024 

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/summary", tags=["summary"])
async def add_file(pdf_file: UploadFile = File(...)):
    file_size = 0
    while True:
        chunk = await pdf_file.read(1024)
        if not chunk:
            break
        file_size += len(chunk)
        if file_size > MAX_FILE_SIZE:
            raise HTTPException(status_code=400, detail="File size exceeds the maximum allowed size (1 MB)")

    # Reset the file cursor back to the beginning
    await pdf_file.seek(0)
    def extract_text_from_pdf(pdf_file):
        text = ""


        try:
            pdf_document = fitz.open(stream=pdf_file.file.read(), filetype="pdf")
            num_pages = len(pdf_document)
            for page_num in range(num_pages):
                page = pdf_document.load_page(page_num)
                text += page.get_text()
        except Exception as e:
            print(f"An error occurred: {str(e)}")
        return text

    extracted_text = extract_text_from_pdf(pdf_file)
    GPTanswear = await getGPTAnswear("Write a short summary about this file" + extracted_text)
    print(GPTanswear)
    return GPTanswear