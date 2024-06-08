from rest_framework import serializers
from djoser.serializers import UserSerializer as BaseUserSerializer
from user.models import User
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

    def create(self, validated_data):        
        username = validated_data.pop('username')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')

        # Get user if it is created else return the existing user
        user, created = User.objects.get_or_create(
            username=username,
            defaults={'first_name': first_name, 'last_name': last_name}
        )
        
        if not created:
            user.first_name = first_name
            user.last_name = last_name
            user.save()

        return user

    def to_representation(self, user):
        data = super().to_representation(user)        
        refresh = RefreshToken.for_user(user)
        access = AccessToken.for_user(user)
        # Include refresh token and access token
        data['refresh_token'] = str(refresh)
        data['access_token']=str(access)

        return data

    
