from fastapi import FastAPI ,Form, File, UploadFile , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from GPTApi import getGPTAnswear
import fitz  # PyMuPDF
app = FastAPI()
MAX_FILE_SIZE = 1024 * 1024

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
async def addFile(pdfFile: UploadFile = File(...)):
    fileSize = 0
    while True:
        chunk = await pdfFile.read(1024)
        if not chunk:
            break
        fileSize += len(chunk)
        if fileSize > MAX_FILE_SIZE:
            raise HTTPException(status_code=400, detail="File size exceeds the maximum allowed size (1 MB)")

    await pdfFile.seek(0)
    def extractTextFromPdf(pdfFile):
        text = ""
        try:
            pdfDocument = fitz.open(stream=pdfFile.file.read(), filetype="pdf")
            numPages = len(pdfDocument)
            for pageNum in range(numPages):
                page = pdfDocument.load_page(pageNum)
                text += page.get_text()
        except Exception as e:
            print(f"An error occurred: {str(e)}")
        return text

    extractedText = extractTextFromPdf(pdfFile)
    GPTanswear = await getGPTAnswear("Write a short summary about this file" + extractedText)
    return GPTanswear

