from rest_framework import serializers
from player.models import Player

class PlayerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Player
        fields=['dob','gender','weight','height','country']
    
class PlayerSerializer(serializers.ModelSerializer):
    username=serializers.SerializerMethodField()
    first_name=serializers.SerializerMethodField()
    last_name=serializers.SerializerMethodField()
    
    def get_username(self,obj):
        return obj.user.username
    def get_first_name(self, obj):
        return obj.user.first_name
    def get_last_name(self, obj):
        return obj.user.last_name
    class Meta:
        model=Player
        fields=['first_name','last_name','dob','gender','weight','height','country']