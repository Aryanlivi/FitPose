from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PersonalViewSet,LeaderboardViewSet,ExercisesViewSet

router = DefaultRouter()
router.register('personal', PersonalViewSet,basename='personal')
router.register('leaderboard',LeaderboardViewSet,basename='leaderboard')
router.register('exercises',ExercisesViewSet,basename='exercises')

urlpatterns = router.urls