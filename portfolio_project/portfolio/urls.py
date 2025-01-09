# portfolio/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Home page
    path('about/', views.about, name='about'),  # About page
    path('skillset/', views.skillset, name='skillset'),
    path('projects/', views.projects, name='projects'),
    path('contact/', views.contact, name='contact'),
]
