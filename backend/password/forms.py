from django import forms
from .models import Category, Password


class PasswordForm(forms.ModelForm):
    
    class Meta:
        model = Password 
        fields = ("app","password", "category", "icon")



class CategoryForm(forms.ModelForm):
    
    class Meta:
        model = Category 
        fields = ("category")
    
