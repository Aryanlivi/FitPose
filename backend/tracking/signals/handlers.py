# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.conf import settings
# from tracking.models import Leaderboard

# @receiver(post_save,sender = settings.AUTH_USER_MODEL)
# def create_leaderboard_for_new_user(sender,**kwargs):
#     user=kwargs['instance']
#     if kwargs['created'] and (user.is_superuser==False) and (user.is_staff==False):
#         leaderboard=Leaderboard.objects.create(user=user)