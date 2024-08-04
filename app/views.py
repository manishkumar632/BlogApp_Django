from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login, logout

# Create your views here.
def home(request):
    return render(request, 'index.html')

def signup(request):
    return render(request, 'registration/signup.html')

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            auth_login(request, user)
            if user.is_staff:
                return redirect('/admin/')
            else:
                return redirect('/')
        else:
            # If login is unsuccessful, return an error message
            error_message = 'Invalid email or password'
            return render(request, 'registration/login.html', {'error': error_message})
    return render(request, 'registration/login.html')

def forgetpassword(request):
    return render(request, 'registration/forgetPassword.html')

def logout(request):
    logout(request)
    return redirect('/')
