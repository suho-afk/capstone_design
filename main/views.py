from django.shortcuts import render
from django.views.generic.base import View
from django.template import loader
from django.http.response import HttpResponse

# Create your views here.
#메인
class IndexView(View):
    def get (self,request):
        userId=request.session.get("memid")
        
        context={
            "userId":userId
            }
        template=loader.get_template("index.html")
        return HttpResponse(template.render( context ,request))
    def post(self,request):
        pass
    