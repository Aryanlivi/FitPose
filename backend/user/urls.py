# urls.py

from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import GoogleSignInViewSet

router = DefaultRouter()
router.register('login', GoogleSignInViewSet, basename='google-signin')

urlpatterns = router.urls