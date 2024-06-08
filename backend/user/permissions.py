from rest_framework import permissions
class IsCurrentUser(permissions.BasePermission):
    def has_permission(self, request, view):
            return bool(request.user.is_authenticated and request.user.is_active and int(request.user.player.pk) == int(view.kwargs['pk']))
