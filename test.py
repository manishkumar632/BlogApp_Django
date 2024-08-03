# result = cloudinary.uploader.upload(
#     "calculator.png",
#     folder="trimmer",
#     resource_type="image")
# print(result)
# CLOUDINARY_URL=cloudinary://537394157842915:F4bNhWH9sjk5sh4gviWPi-GGv3Y@dcvg9vrez


import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from decouple import config

# Configuration
cloudinary.config(
    cloud_name=config("CLOUD_NAME"),
    api_key=config("API_KEY"),
    api_secret=config("API_SECRETS"),
    secure=config("SECURE")
)

upload_result = cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
                                           folder="trimmer",
                                           resource_type="image"
)
print(upload_result["secure_url"])

optimize_url, _ = cloudinary_url("shoes", fetch_format="auto", quality="auto")
print(optimize_url)

auto_crop_url, _ = cloudinary_url("shoes", width=500, height=500, crop="auto", gravity="auto")
print(auto_crop_url)