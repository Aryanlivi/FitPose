from django_filters.rest_framework import FilterSet,CharFilter
from .models import Leaderboard
from django.db import models

class LeaderboardFilter(FilterSet):
    user_name=CharFilter(method='filter_user_name',label="User Name")
    class Meta:
        model = Leaderboard
        fields={
            'personal_highest':['lt','gt']  
        }
        order_by=['personal_count','competitive_count','personal_highest','competitive_highest']
    
    def filter_user_name(self, queryset, name, search_term):
        return queryset.filter(user_username__icontains=search_term)\
            .order_by(
                models.Case(
                    models.When(user_username__istartswith=search_term, then=0),
                    default=1,
                    output_field=models.IntegerField(),
                ),
                'username')
