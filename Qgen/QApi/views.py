from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Employee,QBcontent
from .serializers import EmployeeSerializer
import json
# Create your views here.



@api_view(['POST'])
def createEmployee(request):
    data = request.data
    employee = Employee.objects.create(username=data['username'],password=data['password'],role=data['role'],subject=data['subject'],dept=data['dept'])
    serializer = EmployeeSerializer(employee)
    return Response(serializer.data)

@api_view(['GET'])
def getEmployee(request):
    employee = Employee.objects.all()
    serializer = EmployeeSerializer(employee, many
                                    =True)
    print(employee)
    return Response(serializer.data)

@api_view(['POST'])
def login(request):
    data = request.data
    employee = Employee.objects.all()
    for e in employee:
        if (e.username==data['username'] and e.password==data['password']):
                result = e
                break
    if result.role=='Professor':
        serializer = EmployeeSerializer(result, many=False)
    else:
         serializer = EmployeeSerializer(employee, many=True)      
    return Response(serializer.data)

@api_view(['GET'])
def questionPaper(request):
     f = open('C:\workspace\Q-Gen\Qgen\QApi\Qq.json')

     data = json.load(f)
     no_of_a = int(data['part A'])
     no_of_b = int(data['part B'])
     no_of_c = int(data['part C'])
     part_a =[]
     part_b =[]
     part_c =[]
     qbcontent = QBcontent.objects.all()
    #  print(type(qbcontent))
     while(no_of_a!=len(part_a)):
        for e in qbcontent:
            if(e.subject==data['sub']):
                if(e.part=='A'):
                    if(e.question not in part_a):
                            part_a.append(e.question)
            if (no_of_a==len(part_a)):
                break
     while(no_of_b!=len(part_b)):
        for e in qbcontent:
            if(e.subject==data['sub']):
                if(e.part=='B'):
                    if(e.question not in part_b):
                            part_b.append(e.question)
            if (no_of_b==len(part_b)):
                break
     while(no_of_c!=len(part_c)):
        for e in qbcontent:
            if(e.subject==data['sub']):
                if(e.part=='C'):
                    if(e.question not in part_c):
                            part_c.append(e.question)
            if (no_of_c==len(part_c)):
                break

     print(part_a)
     print(part_b)
     print(part_c)
     part_a=[]
     part_b=[]
     part_c=[]
                    
                    

    #  for i in data:
    #       print(i)
     return Response(data)