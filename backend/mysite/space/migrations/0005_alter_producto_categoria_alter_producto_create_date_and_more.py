# Generated by Django 5.0.1 on 2024-01-24 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0004_delete_choice_delete_question'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='categoria',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='create_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='descripcion',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]