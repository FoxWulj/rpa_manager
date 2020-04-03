from User import views
from django.conf.urls import url

urlpatterns = [
    url(r'^login/', views.login),

    url(r'^check_code', views.check_code),
]