from model import visqa_model
from fastapi import FastAPI, UploadFile, Form, File
from fastapi.middleware.cors import CORSMiddleware


import io
from PIL import Image

app = FastAPI()


origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

@app.post("/visqa")
async def create_visqa(text: str = Form(...), image: UploadFile = File(...)):
    content = await image.read()
    image = Image.open(io.BytesIO(content))
    result = visqa_model(text, image)
    return {'result': result}