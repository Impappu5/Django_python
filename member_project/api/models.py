from django.db import models


# Create your models here.
class Member(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    status=models.CharField(max_length=100)


    def __str__(self):
        return self.name
    
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # 🔐 hash password
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


    # def __str__(self):
    #         return self.email
    
#########Contack Details 
class ContactDetails(models.Model):
     fname = models.CharField(max_length=100)
     lname = models.CharField(max_length=100)
     email =models.EmailField(unique=True)
     phone = models.CharField(max_length=50)
     feedback = models.CharField(max_length=500)
  

     def __str__(self):
          return self.fname
         
        

        
        