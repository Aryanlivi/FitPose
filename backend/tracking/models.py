from django.db import models

# Create your models here.
class Exercises(models.Model):
    name = models.CharField(max_length=100,unique=True)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

