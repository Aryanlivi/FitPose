from rest_framework import serializers
from djoser.serializers import UserSerializer as BaseUserSerializer
from google.oauth2 import id_token
from google.auth.transport import requests
from user.models import User
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken

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

    def to_representation(self, user):
        data = super().to_representation(user)
        # Get access and refresh tokens
        refresh = RefreshToken.for_user(user)
        access = AccessToken.for_user(user)
        # Include refresh token in the serialized data
        data['refresh_token'] = str(refresh)
        data['access_token']=str(access)

        return data

    
