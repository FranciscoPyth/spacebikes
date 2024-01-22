# Generated by Django 5.0.1 on 2024-01-22 12:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0002_products'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=15)),
                ('correo_electronico', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='DetalleVenta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('precio_unitario', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=200)),
                ('precio', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('stock', models.IntegerField(default=0)),
                ('categoria', models.CharField(max_length=50)),
                ('create_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_empresa', models.CharField(max_length=50)),
                ('contacto', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=15)),
                ('correo_electronico', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha_venta', models.DateTimeField(auto_now_add=True)),
                ('importe_total', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='space.cliente')),
            ],
        ),
        migrations.DeleteModel(
            name='Products',
        ),
        migrations.AddField(
            model_name='detalleventa',
            name='producto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='space.producto'),
        ),
        migrations.AddField(
            model_name='producto',
            name='proveedor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='space.proveedor'),
        ),
        migrations.AddField(
            model_name='detalleventa',
            name='venta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='space.venta'),
        ),
    ]