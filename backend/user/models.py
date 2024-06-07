from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length=150,blank=False)
    last_name = models.CharField(max_length=150,blank=False)
    def save(self, *args, **kwargs):
        # Case Insensitivity
        self.username = self.username.lower()
        existing_user = User.objects.filter(username__iexact=self.username).exclude(pk=self.pk).first()
        if existing_user:
            raise ValidationError({'username': 'A user with this username already exists.'})
        
        super().save(*args, **kwargs)


    
