from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from django.contrib.admin.filters import RelatedOnlyFieldListFilter


admin.site.site_header = 'MBlog Admin panel'
admin.site.site_title = 'Admin'
admin.site.index_title = 'MBlog'



class UserAdmin(BaseUserAdmin):
    model = User
    search_fields = ('email', 'username', 'phone_number')
    list_filter = ('is_staff', 'email','is_superuser','is_active',)
    ordering = ('username', 'email', 'phone_number', 'is_staff', 'profile_image_link')
    
admin.site.register(User, UserAdmin)
