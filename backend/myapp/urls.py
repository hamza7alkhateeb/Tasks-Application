from django.urls import path, include
from .views import TaskView
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'task',TaskView,'task')

urlpatterns =[
    path('api/',include(router.urls))
]