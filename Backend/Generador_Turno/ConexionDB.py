import mysql.connector

def Conexion():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="ips_prueba"
    )
    if conexion.is_connected():
        print("Conexión exitosa")
    else:
        print("Error en la conexión")
    return conexion