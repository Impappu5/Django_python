from rest_framework import serializers
from .models import Member
from .models import User
from .models import ContactDetails


# from django.contrib.auth import get_user_model
# User = get_user_model()


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


######Register Serializer


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    # class Meta:
    #     model = User
    #     fields = ["id", "username", "email", "password"]

    # def create(self, validated_data):
    #     user = User.objects.create_user(
    #         email=validated_data["email"],
    #         username=validated_data["username"],
    #         password=validated_data["password"],
    #     )
    #     return user

    password = serializers.CharField(write_only=True)

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        user.is_active = True

        return user


#######  Contact Details ####
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = "__all__"
