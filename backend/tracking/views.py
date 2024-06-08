from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import PersonalSerializer
from .models import Personal
# Create your views here.
class PersonalViewSet(ModelViewSet):
    http_method_names = ['get','post','head','options']

    def get_queryset(self):
        return Personal.objects.all()
    
    def get_serializer_class(self):
        return PersonalSerializer
    
