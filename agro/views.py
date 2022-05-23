from django.shortcuts import render

# Create your views 
def index (request):
    return render (request, 'agro/index.html')

def main (request):
    return render (request, 'dashboard/main.html')

def farmer_main (request):
    return render (request, 'dashboard/farmer_main.html')
