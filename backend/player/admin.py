from django.contrib import admin
from player.models import Player

# Register your models here.
LIST_PER_PAGE=10
@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    autocomplete_fields=["user"]
    
    list_per_page=LIST_PER_PAGE
    search_fields=["user__first_name__istartswith","user__last_name__istartswith"]
    ordering = ["user__first_name", "user__last_name"]
