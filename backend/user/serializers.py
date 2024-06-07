from rest_framework import serializers
from djoser.serializers import UserSerializer as BaseUserSerializer
from google.oauth2 import id_token
from google.auth.transport import requests
from user.models import User
from django.core.exceptions import ValidationError

class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields=["id","username","first_name","last_name"]


class GoogleSignInSerializer(serializers.ModelSerializer):
    given_name = serializers.CharField(source='first_name')  
    family_name = serializers.CharField(source='last_name')  
    nickname = serializers.CharField(source='username')  
    class Meta:
        model=User
        fields=["id","nickname","given_name","family_name"]



    
