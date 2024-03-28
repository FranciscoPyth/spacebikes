from django.contrib import admin
from .models import Proveedor, Producto, Cliente, Venta, DetalleVenta
from django import forms


class ProveedorAdminForm(forms.ModelForm):
    class Meta:
        model = Proveedor
        fields = ['nombre_empresa', 'contacto', 'direccion', 'telefono', 'correo_electronico']

@admin.register(Proveedor)
class ProveedorAdmin(admin.ModelAdmin):
    form = ProveedorAdminForm
    list_display = ('nombre_empresa', 'contacto', 'direccion', 'telefono', 'correo_electronico')

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'direccion', 'telefono', 'correo_electronico')

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion', 'precio_proveedor', 'precio_consumidor', 'stock', 'categoria', 'proveedor', 'create_date', 'imagen')
    list_filter = ('categoria', 'proveedor')
    search_fields = ('nombre', 'proveedor__nombre_empresa')

@admin.register(Venta)
class VentaAdmin(admin.ModelAdmin):
    list_display = ('id', 'fecha_venta', 'importe_total', 'cliente')
    list_filter = ('cliente',)

@admin.register(DetalleVenta)
class DetalleVentaAdmin(admin.ModelAdmin):
    list_display = ('id', 'venta', 'producto', 'cantidad', 'precio_unitario')
    list_filter = ('venta', 'producto')
