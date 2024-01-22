import datetime
from django.db import models
from django.db import models
from django.utils import timezone


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
    

class Proveedor(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_empresa = models.CharField(max_length=50)
    contacto = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    correo_electronico = models.EmailField()

    def __str__(self):
        return self.nombre_empresa

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    correo_electronico = models.EmailField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    stock = models.IntegerField(default=0)
    categoria = models.CharField(max_length=50)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    id = models.AutoField(primary_key=True)
    fecha_venta = models.DateTimeField(auto_now_add=True)
    importe_total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    def __str__(self):
        return f"Venta {self.id} - {self.cliente}"

class DetalleVenta(models.Model):
    id = models.AutoField(primary_key=True)
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"Detalle {self.id} - {self.producto} ({self.cantidad} unidades)"