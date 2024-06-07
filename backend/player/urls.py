# urls.py

from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PlayerViewSet

router = DefaultRouter()
router.register('addinfo', PlayerViewSet, basename='add-player-info')

urlpatterns = router.urls