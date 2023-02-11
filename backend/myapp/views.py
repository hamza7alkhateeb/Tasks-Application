
from .serializers import TaskSerializer
from rest_framework import viewsets
from .models import Task



class TaskView(viewsets.ModelViewSet):
    queryset =Task.objects.all()
    serializer_class =TaskSerializer


