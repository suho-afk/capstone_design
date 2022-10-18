from django.urls.conf import path
from main import views

app_name = "main"

urlpatterns = [
    path("index",views.IndexView.as_view(), name="index"),
]