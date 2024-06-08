from rest_framework import serializers
from .models import Personal,Leaderboard

class PersonalSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()    
    class Meta:
        model = Personal
        fields= ['user_id','exercise_type','count','created_at']        
        
class LeaderboardSerializer(serializers.ModelSerializer):
    exercise_name=serializers.SerializerMethodField()
    username=serializers.SerializerMethodField()

    def get_exercise_name(self,obj):
        return obj.exercise_type.name

    def get_username(self,obj):
        return obj.user.username
    class Meta:
        model=Leaderboard
        fields=['id','user','username','exercise_name','personal_count','competitive_count','personal_highest','competitive_highest']