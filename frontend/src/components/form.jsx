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

    const [formulario, setFormulario] = useState({
        name: '',
        document: '',
        typeDocument: '',
        condition: ''
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post('http://localhost:5000/insertarDatosPacientes', formulario, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(respuesta);
            alert("Datos registrados correctamente");
        }
        catch (error) {
            console.log("Error al enviar datos: ",error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Tipo de documento:</label>
                <select name="typeDocument" value={formulario.typeDocument} onChange={handleChange}>
                    {tiposDocumento.map((tipoDocumento) => (
                            <option key={tipoDocumento.id} value={tipoDocumento.id}>{tipoDocumento.nombre}</option>
                    ))}
                </select>
                <label>No. Cédula:</label>
                <input type="text" name="document" placeholder="Cédula" value={formulario.document} onChange={handleChange}/>
                <label>Nombre:</label>
                <input type="text" name="name" placeholder="Nombre" value={formulario.name} onChange={handleChange}/>
                <label>Seleccione su condición:</label>
                <select name="condition" value={formulario.condition} onChange={handleChange}>
                    {condiciones.map((condicion) => (
                            <option key={condicion.id} value={condicion.id}>{condicion.descripcion}</option>
                    ))}
                </select>
                
                        
                <button type='Submit'>Enviar</button>
            </form>
        </div>
    )
}