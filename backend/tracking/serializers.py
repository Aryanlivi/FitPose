from rest_framework import serializers
from .models import Personal

class PersonalSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()    
    class Meta:
        model = Personal
        fields= ['user_id','exercise_type','count','created_at']        