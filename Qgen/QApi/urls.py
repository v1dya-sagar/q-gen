from django.urls import path
from .views import createEmployee,getEmployee,login,questionPaper
    

urlpatterns = [
    path("create/",createEmployee,name="create"),
    path("get/",getEmployee,name="get"),
    path('login/',login,name='login'),
    path('qpget/',questionPaper,name='qpget'),
]
