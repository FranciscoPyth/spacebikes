# Generated by Django 5.0.1 on 2024-02-11 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0007_alter_cliente_correo_electronico_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='productos/'),
        ),
    ]