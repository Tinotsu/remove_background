from fastapi import FastAPI
from pydantic import BaseModel
from .rm_bg import remove_bg
from fastapi.responses import FileResponse

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


image1_url = "/home/tino/Pictures/image1.jpg"
image2_url = "/home/tino/Pictures/image2.png"


@app.get("/img_w_bg")
async def read_image():
    path = f"{image1_url}"
    return FileResponse(path, headers={"Cache-Control": "no-store"})


@app.get("/img_wo_bg")
async def read_image2():
    path = f"{image2_url}"
    return FileResponse(path, headers={"Cache-Control": "no-store"})


@app.get("/input")
async def read_input():
    return
