from flask import Flask
from ConexionDB import Conexion

app = Flask(__name__)

@app.route('/')
def index():
    conexion = Conexion()
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(port=5000, debug=True)