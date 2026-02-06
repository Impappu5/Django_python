from rest_framework.permissions import BasePermission

class IsSuperUser(BasePermission):
    """
    Permission to allow only superusers to access a view
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.is_superuser)
