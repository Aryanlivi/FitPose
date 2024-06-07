from django.contrib import admin
from .models import Exercises, Leaderboard, Competition, Personal

# Register your models here.
@admin.register(Exercises)
class ExerciseAdmin(admin.ModelAdmin):
    pass

@admin.register(Leaderboard)
class LeaderboardAdmin(admin.ModelAdmin):
    pass

@admin.register(Competition)
class CompetitionAdmin(admin.ModelAdmin):
    pass

@admin.register(Personal)
class PersonalAdmin(admin.ModelAdmin):
    pass