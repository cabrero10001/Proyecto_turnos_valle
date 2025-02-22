from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_cors import CORS
from ConexionDB import Conexion

app = Flask(__name__)
CORS(app)

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