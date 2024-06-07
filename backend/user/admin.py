from django.contrib import admin
from user.models import User
# Register your models here.
LIST_PER_PAGE=10
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username','email','first_name', 'last_name', 'is_staff', 'is_active')
    list_per_page=LIST_PER_PAGE
    search_fields = ('username', 'email', 'first_name', 'last_name')
    ordering = ('username',)