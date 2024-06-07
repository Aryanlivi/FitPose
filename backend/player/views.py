from rest_framework.viewsets import ModelViewSet
from player.models import Player
from player.serializers import PlayerCreateSerializer,PlayerSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class PlayerViewSet(ModelViewSet):
    queryset = Player.objects.all()
    def get_serializer_class(self):        
        if self.request.method == 'POST':
            return PlayerCreateSerializer
        return PlayerSerializer
    
    def get_permissions(self):
        return [IsAuthenticated()]