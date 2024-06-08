from rest_framework.viewsets import ModelViewSet
from player.models import Player
from player.serializers import UpdatePlayerSerializer,PlayerSerializer,SimplePlayerSerializer
from rest_framework.permissions import IsAuthenticated
from user.permissions import IsCurrentUser
# Create your views here.
class PlayerViewSet(ModelViewSet):
    
    http_method_names = ['patch','get','head','options']
    queryset = Player.objects.all()
    def get_serializer_class(self):      
        if self.request.method=='GET':
            if self.action=="retrieve" and IsCurrentUser().has_permission(self.request,self):
                return PlayerSerializer  
        if self.request.method == 'PATCH' and IsCurrentUser().has_permission(self.request,self):
            return UpdatePlayerSerializer
        return SimplePlayerSerializer
    
    def get_permissions(self):
        if self.request.method=="PATCH":
            return [IsCurrentUser()]
        return [IsAuthenticated()]