from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from ConexionDB import Conexion

app = Flask(__name__)
"""app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)"""

@app.after_request
def agregar_headers_cors(response):
    response.headers.add("Access-Control-Allow-Origin", "*")  
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")  
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")  
    return response

@app.route('/insertarDatosPacientes', methods=['POST'])
def insertar_datos():
    data = request.json
    nombre = data['name']
    cedula = data['document']
    tipoDocumento = data['typeDocument']
    condicion = data['condition']
    conexion = Conexion()
    cursor = conexion.cursor()
    consultaSQL = "INSERT INTO pacientes (cedula, nombre, tipo_persona_FK, tipo_documento_FK) VALUES (%s, %s, %s, %s)"
    cursor.execute(consultaSQL, (cedula, nombre, condicion, tipoDocumento))
    conexion.commit()
    cursor.close()
    conexion.close()
    return jsonify({"mensaje": "Datos insertados correctamente"})



#transforma la tabla de tipos de documentoa json
@app.route('/tiposdocumento', methods=['GET'])
def tipos_de_documentos():
    conexion = Conexion()
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM tipos_documento")
    datos = [{"id": row[0], "nombre": row[1]} for row in cursor.fetchall()]
    cursor.close()
    conexion.close()
    return jsonify(datos)

#transforma la tabla de tipos de personas a json
@app.route('/condicion', methods=['GET'])
def condicion():
    conexion = Conexion()
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM tipo_persona")
    datos = datos = [{"id": row[0], "descripcion": row[1]} for row in cursor.fetchall()]
    cursor.close()
    conexion.close()
    return jsonify(datos)

#transforma la tabla de Estado del turno a json
@app.route('/estadoturno', methods=['GET'])
def estado_turno():
    conexion = Conexion()
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM EstadoTurno")
    datos = cursor.fetchone()
    cursor.close()
    conexion.close()
    return jsonify(datos)

if __name__ == '__main__':
    app.run(port=5000, debug=True)