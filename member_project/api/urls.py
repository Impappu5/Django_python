from django.urls import path

from .views import RegisterUser, LoginAPI, UserProfile, ContactAPI,LogoutAPI




urlpatterns = [
    path("register/", RegisterUser.as_view(), name="register"),
    path("login/", LoginAPI.as_view(), name="login"),
    path("profile/", UserProfile.as_view(), name="profile"),
    path("logout/", LogoutAPI.as_view(), name="logout"),
    path("contact/",ContactAPI.as_view() , name="contact"),



]
