from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=200)
    age=models.IntegerField
    email=models.EmailField(unique=True)
    mbl_no=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
    