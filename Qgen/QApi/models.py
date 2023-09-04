from django.db import models

# Create your models here.

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    username=models.CharField(null=False,blank=False,max_length=50)
    password=models.CharField(null=False,blank=False,max_length=20)
    role = models.CharField(null=False,blank=False,max_length=12)
    subject = models.CharField(null=False,blank=False,max_length=20)
    dept = models.CharField(null=False,blank=False,max_length=20)

    def __str__(self):
        return self.username

class QBcontent(models.Model):
    qid = models.AutoField(primary_key=True)
    part = models.CharField(null=False,blank=False,max_length=10)
    difficulty = models.CharField(null=False,blank=False,max_length=2,)
    subject = models.CharField(null=False,blank=False,max_length=25)
    chapter = models.CharField(null=False,blank=False,max_length=50)
    question = models.CharField(null=False,blank=False,max_length=1000)
    option1 = models.CharField(null=True,blank=True,max_length=100)
    option2 = models.CharField(null=True,blank=True,max_length=100)
    option3 = models.CharField(null=True,blank=True,max_length=100)
    option4 = models.CharField(null=True,blank=True,max_length=100)
    
    def __str__(self):
        return self.subject

