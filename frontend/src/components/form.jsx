import { useState, useEffect } from 'react';
import './form.module.css';
import axios from 'axios';

export default function Form () {
    const [tiposDocumento, setTiposDocumento] = useState([]);
    useEffect (() => {
        axios.get('http://localhost:5000/tiposdocumento')
        .then(datos => {
            console.log("Datos Recibidos", datos.data);
            setTiposDocumento(datos.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [condiciones, setCondiciones] = useState([]);
    useEffect (() => {
        axios.get('http://localhost:5000/condicion')
        .then(datos => {
            console.log("Datos Recibidos", datos.data);
            setCondiciones(datos.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <form action="" >
                <label>Tipo de documento:</label>
                <select>
                    {tiposDocumento.map((tipoDocumento) => (
                            <option key={tipoDocumento.id} value={tipoDocumento.id}>{tipoDocumento.nombre}</option>
                    ))}</select>
                
                <label>No. Cédula:</label>
                <input type="text" name="cedula" placeholder="Cédula" />
                <label>Nombre:</label>
                <input type="text" name="nombre" placeholder="Nombre" />
                <label>Seleccione su condición:</label>
                <select name="Condicion" id="condicion">
                    {condiciones.map((condicion) => (
                            <option key={condicion.id} value={condicion.id}>{condicion.descripcion}</option>
                    ))}
                </select>
                
                        
                <input type="submit" value="Ok" />
            </form>
        </div>
    )
}