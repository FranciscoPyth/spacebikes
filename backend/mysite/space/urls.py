from django.urls import path, include
from space import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'proveedores', views.ProveedorView, 'proveedor')  
router.register(r'clientes', views.ClienteView, 'cliente')
router.register(r'productos', views.ProductoView, 'producto')
router.register(r'ventas', views.VentaView, 'venta')
router.register(r'detalle_ventas', views.DetalleVentaView, 'detalle_venta')

urlpatterns = [
    path("api/v1/", include(router.urls))
]

# Configuración para servir archivos de medios durante el desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)