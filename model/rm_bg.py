from PIL import Image
from rembg import remove
import io
import requests


def remove_bg(url):
    resp = requests.get(url)
    resp.raise_for_status()
    input_data = resp.content

    output_data = remove(input_data)

    output_image = Image.open(io.BytesIO(output_data))
    output_path = "/home/tino/Pictures/output_image2.png"
    output_image.save(output_path)
    return output_path


if __name__ == "__main__":
    remove_bg()

"""
For video I think : OpenCV to decompose vidoe in multiple image, 
then run rembg for each frame 
"""
