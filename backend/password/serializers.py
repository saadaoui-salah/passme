from rest_framework import serializers
from .models import Passwords

class PasswordSerializer(serializers.Serializer):
    class Meta:
        model = Passwords
        fields = ['id','app','category','icon']

class PasswordDetailsSerializer(serializers.Serializer):
    class Meta:
        model = Passwords
        fields = ['id','password','email']

