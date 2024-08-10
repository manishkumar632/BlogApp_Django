from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
User = get_user_model()

# Create your views here.
def home(request):
    return render(request, 'index.html')

def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        username = request.POST.get('username')
        gender = request.POST.get('gender')
        print(f'Email: {email}, Password: {password}, Username: {username}, Gender: {gender}')
        if User.objects.filter(email=email).exists():
            error_message = 'Email already exists'
            return render(request, 'registration/signup.html', {'error': error_message})
        if User.objects.filter(username=username).exists():
            error_message = 'Username already exists'
            return render(request, 'registration/signup.html', {'error': error_message})
        else:
            user = User.objects.create_user(email=email, password=password, username=username, gender=gender)
            user.save()
            auth_login(request, user)
            return redirect('/')
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
                # return redirect(f'/{user.username}/dashboard')
                return redirect('/')
        else:
            error_message = 'Invalid email or password'
            return render(request, 'registration/login.html', {'error': error_message})
    return render(request, 'registration/login.html')

def forgetpassword(request):
    return render(request, 'registration/forgetPassword.html')

def logout(request):
    auth_logout(request)
    return redirect('/')


@login_required
def dashboard(request, username):
    return render(request, 'dashboard/dashboard.html')

# create a new post

def create_post(request, username):
    # if request.method == 'POST':
    #     title = request.POST.get('title')
    #     content = request.POST.get('content')
    #     user = request.user
    #     post = Post.objects.create(title=title, content=content, user=user)
    #     post.save()
    #     return redirect('/')
    return render(request, 'dashboard/create_post.html')