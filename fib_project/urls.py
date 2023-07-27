from django.contrib import admin
from django.urls import path
from fib_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('fibonacci/', views.fibonacci, name='fibonacci'),
    path('health/', views.health_check, name='health_check'),
]
