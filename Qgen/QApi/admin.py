from django.contrib import admin

# Register your models here.
from .models import Employee,QBcontent

class EmployeeAdmin(admin.ModelAdmin):
    list_display =['username', 'dept']
    search_fields = ['username', 'dept', 'subject','role']

class QBcontentAdmin(admin.ModelAdmin):
    list_display =['subject', 'part']
    search_fields = ['subject', 'chapter', 'part']


admin.site.register(Employee,EmployeeAdmin)
admin.site.register(QBcontent,QBcontentAdmin)