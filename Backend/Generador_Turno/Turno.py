from flask import Flask, jsonify, request
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 

turnos = []
contador = 1

@app.route('/generar-turno', methods=['POST'])
def generar_turno():
    global contador
    data = request.get_json()
    especialidad = data.get('especialidad', 'General')
    turno = {"id": contador, "especialidad": especialidad, "estado": "En espera"}
    turnos.append(turno)
    contador += 1
    return jsonify(turno), 201

@app.route('/turnos', methods=['GET'])
def obtener_turnos():
    return jsonify(turnos)

if __name__ == '__main__':
    app.run(debug=True)
