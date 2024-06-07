from django.db import models
from user.validators import validate_birth_date,GENDER_CHOICES,COUNTRY_CHOICES
from django.core.validators import MinValueValidator
from django.conf import settings
# Create your models here.
class Player(models.Model):
    user=models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,null=True,blank=True,related_name="player")
    dob= models.DateField(validators=[validate_birth_date],null=True)

    gender = models.CharField(choices=GENDER_CHOICES, max_length=1)
    weight = models.FloatField(validators=[MinValueValidator(0)])
    height = models.FloatField(validators=[MinValueValidator(0)])
    country = models.CharField(default='NE',max_length=100, choices=COUNTRY_CHOICES, null=True)
