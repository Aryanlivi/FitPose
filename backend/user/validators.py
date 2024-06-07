from django.core.exceptions import ValidationError
from datetime import date
GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
COUNTRY_CHOICES = [
        ('US', 'United States'),
        ('UK', 'United Kingdom'),
        ('CA', 'Canada'),
        ('AU', 'Australia'),
        ('NE', 'Nepal'),
    ]


def validate_birth_date(value):
    if value >= date.today():
        raise ValidationError("Birth date cannot be in the future.")
    