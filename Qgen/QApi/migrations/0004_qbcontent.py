# Generated by Django 4.2.4 on 2023-09-04 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('QApi', '0003_delete_employee1'),
    ]

    operations = [
        migrations.CreateModel(
            name='QBcontent',
            fields=[
                ('qid', models.AutoField(primary_key=True, serialize=False)),
                ('part', models.CharField(max_length=10)),
                ('difficulty', models.CharField(max_length=2)),
                ('subject', models.CharField(max_length=25)),
                ('chapter', models.CharField(max_length=50)),
                ('question', models.CharField(max_length=1000)),
                ('option1', models.CharField(blank=True, max_length=100, null=True)),
                ('option2', models.CharField(blank=True, max_length=100, null=True)),
                ('option3', models.CharField(blank=True, max_length=100, null=True)),
                ('option4', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]