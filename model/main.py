from fastapi import FastAPI
from PIL import Image
from rembg import remove
import io

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello on rmgb.com"}

input_path = '/home/tino/Pictures/image1.jpg'
output_path = '/home/tino/Pictures/output_image.png'

with open(input_path, 'rb') as input_file:
    input_data = input_file.read()

output_data = remove(input_data)

output_image = Image.open(io.BytesIO(output_data))
output_image.save(output_path)

print('Background removed')


