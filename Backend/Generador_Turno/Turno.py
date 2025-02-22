from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# Función para inicializar la base de datos (si no existe)
def init_db():
    conn = mysql.connector.connect(
        host="localhost",   #nombre del host donde se encuentra la base de datos
        user='root',  # Nombre de usuario de MySQL
        password='', # Contraseña de MySQL
        database="nombre_base_de_datos" # Nombre de la base de datos
    )
    cursor = conn.cursor() # Crear un cursor
    cursor.execute('''               
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            documento VARCHAR(255) NOT NULL,
            numero_asignado INT NOT NULL
        )
    ''')  # Crear la tabla usuarios si no existe en la base de datos
    conn.commit() # Guardar los cambios
    conn.close() # Cerrar la conexión
    
    @app.route('/') # Ruta principal o raiz
    def registrar():
        nombre = request.form['nombre'] # Obtener el nombre del formulario
        documento = request.form['documento'] # Obtener el documento del formulario
        
        # Conectar a la base de datos MySQL
        conn = mysql.connector.connect(
            host="localhost",   #nombre del host donde se encuentra la base de datos
            user='root',  # Nombre de usuario de MySQL
            password='', # Contraseña de MySQL
            database="nombre_base_de_datos" # Nombre de la base de datos
        )
        cursor = conn.cursor() # Crear un cursor
        
        # Obtener el número asignado (se reinicia en 1 después de 100)
        cursor.execute('SELECT COUNT(*) FROM usuarios') # Contar el número de usuarios registrados
        count = cursor.fetchone()[0] # Obtener el número de usuarios registrados
        numero_asignado = (count % 100) + 1 # Calcular el número asignado
        
        # Insertar los datos en la base de datos\
        cursor.execute('''
            INSERT INTO usuarios (nombre, documento, numero_asignado)
            VALUES (%s, %s, %s)
        ''', (nombre, documento, numero_asignado)) # Insertar los datos en la base de datos
        conn.commit() # Guardar los cambios
        
        # Obtener el id del usuario recién registrado para mostrar el turno
        cursor.execute('SELECT id FROM usuarios WHERE nombre = %s AND documento = %s', (nombre, documento)) # Obtener el id del usuario recién registrado
        usuario_id = cursor.fetchone()[0] # Obtener el id del usuario recién registrado
        conn.close() # Cerrar la conexión
        
        # Redirigir al usuario a la página que muestra el turno asignado
        return redirect(url_for('mostrar_turno', id=usuario_id)) # Redirigir al usuario a la página que muestra el turno asignado
    
    @app.route('/turno/<int:id>') # Ruta para mostrar el turno asignado
    def mostrar_turno(id):
        conn = mysql.connector.connect(
            host="localhost",   #nombre del host donde se encuentra la base de datos
            user='root',  # Nombre de usuario de MySQL
            password='', # Contraseña de MySQL
            database="nombre_base_de_datos" # Nombre de la base de datos
        )
        cursor = conn.cursor() # Crear un cursor
        cursor.execute('SELECT nombre, numero_asignado FROM usuarios WHERE id = %s', (id,)) # Obtener el nombre y el número asignado del usuario
        usuario = cursor.fetchone() # Obtener el nombre y el número asignado del usuario
        conn.close() # Cerrar la conexión
        
        # Mostrar el nombre y el turno asignado
        if usuario: # Si el usuario existe
            nombre, numero_asignado = usuario # Obtener el nombre y el número asignado del usuario
            return render_template('turno.html', nombre=nombre, numero_asignado=numero_asignado) # Mostrar el nombre y el número asignado del usuario
        else:
            return "Usuario no encontrado", 404 # Mostrar un mensaje de error si el usuario no existe
        
    if __name__ == '__main__':
        init_db()  # Inicializa la base de datos cuando el servidor se inicia
        app.run(debug=True) # Ejecutar la aplicación en modo de depuración