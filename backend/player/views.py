from rest_framework.viewsets import ModelViewSet
from player.models import Player
from player.serializers import UpdatePlayerSerializer,PlayerSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class PlayerViewSet(ModelViewSet):
    
    http_method_names = ['patch','get','head','options']
    queryset = Player.objects.all()
    def get_serializer_class(self):        
        if self.request.method == 'PATCH':
            return UpdatePlayerSerializer
        return PlayerSerializer
    
    def get_permissions(self):
        return [IsAuthenticated()]