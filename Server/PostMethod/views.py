from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import Userserializer


@api_view(['POST'])
def register_User(request):
    serializer=Userserializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data ,status=200)
    return Response(serializer.errors,status=400)