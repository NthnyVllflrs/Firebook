# Generated by Django 2.0.8 on 2018-09-18 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_notification'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notification',
            name='recipient',
        ),
        migrations.RemoveField(
            model_name='notification',
            name='sender',
        ),
        migrations.AlterField(
            model_name='responder',
            name='station',
            field=models.CharField(choices=[('Crime', 'Crime'), ('Fire', 'Fire')], max_length=10),
        ),
        migrations.DeleteModel(
            name='Notification',
        ),
    ]
