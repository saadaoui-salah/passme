from django.contrib import admin
from django.urls import path
from .views import PasswordApiView, PasswordDetailsApiView, AuthApiView

urlpatterns = [
    path('auth', AuthApiView.as_view()),
    path('pass/', PasswordApiView.as_view()),
    path('pass/details/<int:id>', PasswordDetailsApiView.as_view())
]