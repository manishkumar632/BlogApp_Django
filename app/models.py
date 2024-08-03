from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    user_bio = models.CharField(max_length=500, null=True)
    profile_image = models.ImageField(upload_to="profile")
    
