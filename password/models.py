from django.db import models

class Category(models.Model):
    category  = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class Password(models.Model):
    
    app      = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE) 
    email    = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    icon     = models.CharField(max_length=100)
    date     = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.app