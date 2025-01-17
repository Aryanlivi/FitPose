from django.db import models
from django.conf import settings

# Create your models here.
class Exercises(models.Model):
    name = models.CharField(max_length=100,unique=True)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Leaderboard(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    exercise_type = models.ForeignKey(Exercises,on_delete=models.CASCADE)
    personal_count = models.IntegerField(default=0)
    competitive_count = models.IntegerField(default=0)
    personal_highest = models.IntegerField(default=0)
    competitive_highest = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user','exercise_type')
        
    def __str__(self):
        return f"{self.user.username} Leaderboard"

class Competition(models.Model):
    exercise_type = models.ForeignKey(Exercises,on_delete=models.CASCADE)
    user1 = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='user1')
    user2 = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='user2')
    user1_count = models.IntegerField(default=0)
    user2_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class Personal(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    exercise_type = models.ForeignKey(Exercises,on_delete=models.CASCADE)
    count = models.IntegerField(default=0)    
    created_at = models.DateTimeField(auto_now_add=True)

