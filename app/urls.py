from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("login", views.login, name="login"),
    path("signup", views.signup, name="signup"),
    path("login/forget-password", views.forgetpassword, name="forget-password"),
    path("logout", views.logout, name="logout"),
    path("<str:username>/dashboard/", views.dashboard, name="dashboard"),
    path("<str:username>/create-post/", views.create_post, name="create-post"),
    path("password-reset/",auth_views.PasswordResetView.as_view(template_name='users/password_reset.html'), name="password_reset"),
    path("password-reset/done/",auth_views.PasswordResetDoneView.as_view(template_name='users/password_reset_done.html'), name="password_reset_done"),
    path("password-reset-confirm/<uidb64>/<token>/",auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'), name="password_reset_confirm"),
]