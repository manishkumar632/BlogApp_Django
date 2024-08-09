from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

admin.site.site_header = 'MBlog Admin panel'
admin.site.site_title = 'Admin'
admin.site.index_title = 'MBlog'


class UserAdmin(BaseUserAdmin):
    model = User

    list_display = ('username', 'email', 'user_bio', 'profile_image_link', 'phone_number', 'gender')
    search_fields = ('email', 'username', 'phone_number')
    list_filter = ('is_staff', 'email', 'is_superuser', 'is_active')
    ordering = ('username', 'email', 'phone_number', 'is_staff', 'profile_image_link')

    # Customizing the fields displayed in the change user form
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'user_bio', 'profile_image', 'profile_image_link', 'phone_number', 'gender')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    # Customizing the fields displayed in the add user form
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'user_bio', 'profile_image', 'profile_image_link', 'phone_number', 'gender'),
        }),
    )


admin.site.register(User, UserAdmin)
