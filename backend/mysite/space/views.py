from .models import *
from rest_framework import viewsets
from .serializer import *


class ProveedorView(viewsets.ModelViewSet):
    serializer_class =  ProveedorSerializer
    queryset = Proveedor.objects.all()


class ClienteView(viewsets.ModelViewSet):
    serializer_class =  ClienteSerializer
    queryset = Cliente.objects.all()


class ProductoView(viewsets.ModelViewSet):
    serializer_class =  ProductoSerializer
    queryset = Producto.objects.all()


class VentaView(viewsets.ModelViewSet):
    serializer_class =  VentaSerializer
    queryset = Venta.objects.all()


class DetalleVentaView(viewsets.ModelViewSet):
    serializer_class =  DetalleVentaSerializer
    queryset = DetalleVenta.objects.all()