import './form.css'

import { useState } from "react"

const Form = () => {
    const [values, setValues] = useState({
        name: "",
        document: "",
        condition: ""
    })
    const handleInputChange = (event) =>{
        const {name,value} =event.target;
        setValues({
            ...values,
            [name]:value,
        });
    }
    

    return (
        <div>
            <div class="box">
                
            </div>
            <form class="form">
                <h1>FORMULARIO DE REGISTRO</h1>

                <label htmlFor="name">Nombre</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Jhon Doe Rodriguez"
                class="input__form"
                onChange={handleInputChange}/>

                <label htmlFor="document">Documento</label>
                <input 
                type="number" 
                name="document" 
                placeholder="Ingrese su documento"
                class="input__form"
                onChange={handleInputChange}/>
                
                <label htmlFor="condition">Condicion</label>             
                <input 
                    list="conditions" 
                    name="condition" 
                    class="input__form"
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