from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("login", views.login, name="login"),
    path("signup", views.signup, name="signup"),
    path("login/forget-password", views.forgetpassword, name="forget-password"),
    path("logout", views.logout, name="logout"),
    path("<str:username>/dashboard/", views.dashboard, name="dashboard"),
]