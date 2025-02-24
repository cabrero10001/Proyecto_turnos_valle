from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from ConexionDB import Conexion

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.route('/insertarDatosPacientes', methods=['POST', 'OPTIONS'])
def insertar_datos():
    if request.method == 'OPTIONS':
        return respuestaPreflight()
    data = request.json
    nombre = data['name']
    cedula = int(data['document'])
    tipoDocumento = int(data['typeDocument'])
    condicion = int(data['condition'])
    conexion = Conexion()
    cursor = conexion.cursor()
    consultaSQL = "INSERT INTO Pacientes (cedula, nombre, tipo_persona_FK,tipo_documento_FK)VALUES (%s, %s, %s, %s)"
    try:
        cursor.execute(consultaSQL, (cedula, nombre, condicion, tipoDocumento))
        conexion.commit()
        cursor.close()
        conexion.close()
        return jsonify({"mensaje": "Datos insertados"})
    except Exception as e:
        conexion.rollback()
        mensaje = {"error": str(e)}
    return jsonify(mensaje)

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

def respuestaPreflight():
    response = jsonify({"mensaje": "Metodo options permitido"})
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
    return response, 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)