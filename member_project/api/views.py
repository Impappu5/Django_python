from django.shortcuts import render
from rest_framework import viewsets
from .models import Member

# from .models import User
from .serializers import MemberSerializer
from rest_framework.decorators import api_view
from .serializers import ContactSerializer

# from django.contrib.auth.models import User
from .models import User


from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated


from rest_framework.permissions import AllowAny

###### password forgot 
from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import smart_bytes, smart_str



###########Signup API #########
class RegisterUser(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPI(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if not user:
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            }
        )

  
#   ##########User Profile
class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({"id": user.id, "username": user.username, "email": user.email})
        return Response({
        "id": user.id, 
        "username": user.username,
        "email": user.email})
    


    ############Logout Parts
class LogoutAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(
                {"message": "Logged out successfully"},
                status=status.HTTP_205_RESET_CONTENT
            )

        except Exception as e:
            return Response(
                {"error": "Invalid refresh token"},
                status=status.HTTP_400_BAD_REQUEST
            )

class ForgotPasswordAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')

        user = User.objects.filter(email=email).first()
        if not user:
            return Response(
                {"error": "Email not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        uid = urlsafe_base64_encode(smart_bytes(user.id))
        token = PasswordResetTokenGenerator().make_token(user)

        link = f"http://localhost:4200/reset-password/{uid}/{token}"

        send_mail(
            "Reset Password",
            f"Click this link:\n{link}",
            None,
            [email],
        )

        return Response({"message": "Reset link sent"})

class ResetPasswordAPI(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        password = request.data.get('password')
        uidb64 = request.data.get('uidb64')
        token = request.data.get('token')

        uid = smart_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=uid)

        if not PasswordResetTokenGenerator().check_token(user, token):
            return Response({"error": "Invalid token"}, status=400)

        user.set_password(password)
        user.save()

        return Response({"message": "Password changed successfully"})






# Create your views here.
###############Get value 1st day #########
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


################Contact Views#######

class ContactAPI(APIView):
    permission_classes = [AllowAny]  # no CSRF required with JWT

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Contact saved successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

