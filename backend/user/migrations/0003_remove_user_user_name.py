# Generated by Django 5.0.6 on 2024-06-07 15:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_user_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='user_name',
        ),
    ]