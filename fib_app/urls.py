from django.urls import path
from . import views

urlpatterns = [
    path('fibonacci/', views.fibonacci, name='fibonacci'),
    path('health/', views.health_check, name='health_check'),
]
