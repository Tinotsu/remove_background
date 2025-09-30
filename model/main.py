from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from .rm_bg import remove_bg
from fastapi.responses import FileResponse

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello on rm_gb"}


class Login(BaseModel):
    username: str
    password: str


@app.post("/login/")
async def login(data: Login):
    return {"username": data.username}


class Image_URL(BaseModel):
    url: str


@app.post("/remove_bg/")
async def image_url(data: Image_URL):
    path = remove_bg(data.url)
    return {"saved": path}


IMAGE_DIR = "/home/tino/Pictures/output_image3.png"


@app.get("/img_wo_bg")
async def read_image():
    path = f"{IMAGE_DIR}"
    return FileResponse(path)
