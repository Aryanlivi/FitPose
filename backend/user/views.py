from rest_framework.viewsets import ModelViewSet
from user.models import User
from .serializers import GoogleSignInSerializer
# Create your views here.
class GoogleSignInViewSet(ModelViewSet):
    http_method_names = ['post','head','options']
    queryset = User.objects.all()
    def get_serializer_class(self):        
        if self.request.method == 'POST':
            return GoogleSignInSerializer
        
        
            