import './form.css'

import { useState } from "react"

const Form = () => {
    const [values, setValues] = useState({  //El objeto dentro de 'useState' es el valor inicial
        name: "",   //'values' contiene el objeto dentro de useState
        document: "",
        condition: ""
    })
    const handleInputChange = (event) =>{
        const {name,value} =event.target;//se desestructura el event.target el cual acumula el name,value y type de los input
        setValues({//se modifica el estado de 'values'
            ...values,// guarda las claves y valores anteriores
            [name]:value,//se guarda en 'value' el name y value del input modificado
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();  // Evita que la página se recargue
        console.log(values);  // Muestra los datos en la consola
    };
    
    

    return (
        <div>
            <div className="box">
                
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>FORMULARIO DE REGISTRO</h1>

                <label htmlFor="name">Nombre</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Jhon Doe Rodriguez"
                className="input__form"
                onChange={handleInputChange}/>

                <label htmlFor="document">Documento</label>
                <input 
                type="number" 
                name="document" 
                placeholder="Ingrese su documento"
                className="input__form"
                onChange={handleInputChange}/>
                
                <label htmlFor="condition">Condicion</label>             
                <input 
                    list="conditions" 
                    name="condition" 
                    className="input__form"
                    placeholder='N/A'
                    onChange={handleInputChange} 
                />
                <datalist id="conditions">
                    <option value="No aplica" ></option>
                    <option value="Adulto mayor"></option>
                    <option value="Mujer Embarazada"></option>
                    <option value="Condicion de Discapacidas"></option>
                </datalist>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;