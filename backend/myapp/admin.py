from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id','title','description','completed')
    list_display_link =('id','title')
    



admin.site.register(Task,TaskAdmin)
