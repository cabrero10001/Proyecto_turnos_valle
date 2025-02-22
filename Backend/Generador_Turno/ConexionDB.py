import mysql.connector

mysql = None

def Conexion():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="ip_prueba"
    )
    return conexion