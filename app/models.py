from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    user_bio = models.CharField(max_length=500, blank=True, null=True)
    profile_image = models.ImageField(upload_to="profile", blank=True, null=True)
    profile_image_link = models.CharField(max_length=500, blank=True, null=True)
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)
    GENDER_CHOICES = [
        ('male', 'male'),
        ('female', 'female'),
        ('other', 'other'),
    ]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default='male')

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"username: {self.username}\nemail: {self.email}"
