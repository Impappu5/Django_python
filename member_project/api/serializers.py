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

    password = serializers.CharField(write_only=True)

    password = serializers.CharField(write_only=True)

    password = serializers.CharField(write_only=True, required=False)


    class Meta:
        model = User
        fields = ["id", "username", "email", "password", "last_updated"]
        read_only_fields = ["id", "email", "last_updated"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        user.is_active = True

        return user

    # ✅ ADD THIS
    def update(self, instance, validated_data):
        instance.username = validated_data.get("username", instance.username)

        password = validated_data.get("password")
        if password:
            instance.set_password(password)

        
        instance.save()  # ✅ last_updated automatically updates here
        return instance


#######  Contact Details ####
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = "__all__"
