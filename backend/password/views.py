from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PasswordSerializer
from .models import Password
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.db.utils import IntegrityError
class PasswordApiView(APIView):
    
    def get_object(self, id):
        try: 
            return Password.objects.get(id=id)
        except Password.DoesNotExist:
            return Response({"error": "not found"})

    def get(self, request):
        if request.user.is_authenticated:
            passwords = Password.objects.all().order_by('date')
            serializer = PasswordSerializer(passwords, many=True)
            return Response(serializer.data)
        return Response({"success": False, 'error':'not authenticated'})
    

    
    def post(self, request):
        if request.user.is_authenticated:
            serializer = PasswordSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        return Response({"success":False, 'error':'not authenticated'})


class PasswordDetailsApiView(APIView):
    
    def get_object(self, id):
        try: 
            return Password.objects.get(id=id)
        except Password.DoesNotExist:
            return Response({"error": "not found"})

    def delete(self, request, id):
        if request.user.is_authenticated:
            password = self.get_object(id)
            password.delete()
            return Response({"success": True})
        return Response({"success":False, 'error':'not authenticated'})
    
    def get(self, request, id):
        if request.user.is_authenticated:
            passwords = self.get_object(id)
            serializer = PasswordDetailsSerializer(queryset, many=True)
            return Response(serializer.data)
        return Response({"success": False, 'error':'not authenticated'})

    def post(self, request, id):
        if request.user.is_authenticated:
            password = self.get_object(id)
            serializer = PasswordSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        return Response({"success":False, 'error':'not authenticated'})


class AuthApiView(APIView):
    
    def post(self, request):
        if request.data['pwd']:
            user = authenticate(username='root', password=request.data['pwd'])
            if user is not None:
                try:
                    token = Token.objects.create(user=user)
                except IntegrityError:
                    token = Token.objects.filter(user=user)
                    token = list(token.values())[0]['key']
                return Response({"success":True, 'token':token})
            return Response({"success":False, 'error':'user not authenticated'})
        return Response({"success":False, 'error':'pwd not found'})