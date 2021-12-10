from rest_framework import serializers
from .models import Password

class PasswordSerializer(serializers.Serializer):
    class Meta:
        model = Password
        fields = ['id','app','category','icon']

class PasswordDetailsSerializer(serializers.Serializer):
    class Meta:
        model = Password
        fields = ['id','password','email']

