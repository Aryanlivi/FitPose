from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet
from user.models import User
from .serializers import GoogleSignInSerializer
# Create your views here.
class GoogleSignInViewSet(ModelViewSet):
    queryset = User.objects.all()
    def get_serializer_class(self):        
        if self.request.method == 'POST':
            return GoogleSignInSerializer
        return GoogleSignInSerializer
        
            