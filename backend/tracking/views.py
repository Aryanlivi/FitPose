from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import PersonalSerializer,LeaderboardSerializer,ExercisesSerializer
from .models import Personal,Leaderboard,Exercises
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from .filters import LeaderboardFilter
# Create your views here.
class PersonalViewSet(ModelViewSet):
    http_method_names = ['get','post','head','options']

    def get_queryset(self):
        return Personal.objects.all()
    
    def get_serializer_class(self):
        return PersonalSerializer
    
class ExercisesViewSet(ModelViewSet):
    http_method_names=['get','head','options']
    queryset=Exercises.objects.all()
    serializer_class=ExercisesSerializer
class LeaderboardViewSet(ModelViewSet):
    http_method_names = ['get','post','patch','head','options']
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = LeaderboardFilter
    ordering_fields = ['personal_count', 'competitive_count'] 
    #default ordering
    ordering = ['-personal_count'] 
    def get_queryset(self):
        exercise_type = self.request.query_params.get('exercise_type')
        sort_by=self.request
        return Leaderboard.objects.filter(exercise_type=exercise_type)
    
    def get_serializer_class(self):
        return LeaderboardSerializer
