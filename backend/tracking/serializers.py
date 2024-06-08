from rest_framework import serializers
from .models import Personal,Leaderboard,Exercises
from user.models import User
from django.db import transaction

class PersonalSerializer(serializers.ModelSerializer):
    # user_id = serializers.IntegerField()    
    class Meta:
        model = Personal
        fields= ['user','exercise_type','count','created_at']   
    def create(self, validated_data):  
        with transaction.atomic():      
            
            user = validated_data.pop('user')
            
            exercise=validated_data.pop('exercise_type')
            personal_instance = Personal.objects.create(user_id=user.id, exercise_type_id=exercise.id,**validated_data)
            #get or create leaderboard 
            leaderboard_instance,created=Leaderboard.objects.get_or_create(user_id=user.id,exercise_type_id=exercise.id)
            count=validated_data.get('count')
            leaderboard_instance.personal_count+=count
            leaderboard_instance.save()
            return  personal_instance
        
class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Exercises
        fields=['id','name']
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