import { useState } from "react";

/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Documento
 * - Condición
 */
const Form = () => {
    // Estado para almacenar los valores del formulario
    const [values, setValues] = useState({
        name: "",       // Campo para el nombre
        document: "",   // Campo para el documento
        condition: ""   // Campo para la condición
    });

    /**
     * Maneja los cambios en los inputs y actualiza el estado
     * @param {Object} event - Evento de cambio en el input
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    
    return (
        <div className="bg-gradient-to-r from-[rgb(103,153,254)]">
            {/* Contenedor adicional para el formulario (coso negro)*/}
            <div className="absolute w-[250px] h-[55px] left-1/2 top-[40px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>

            {/* Contenedor del formulario con estilos de fondo, bordes y espaciado */}
            <form className="bg-[#d9d9d9] border-[30px] border-[#3c3c3c] p-[30px] w-[500px] h-[600px] mx-auto mt-[30px] rounded-[25px]">
                
                {/* Título del formulario */}
                <h1 className="text-center text-[32px]">FORMULARIO DE REGISTRO</h1>
                
                {/* Campo para el nombre */}
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre"
                    className="text-[20px] w-full box-border p-[10px_12px] my-[20px] bg-none  border-b-[3px] border-b-black"
                    onChange={handleInputChange}
                />

                {/* Campo para el documento */}
                <label htmlFor="document">Documento</label>
                <input 
                    type="number" 
                    name="document" 
                    placeholder="Ingrese su documento"
                    className="text-[20px] w-full box-border p-[10px_12px] my-[20px] bg-none  border-b-[3px] border-b-black"
                    onChange={handleInputChange}
                />
                
                {/* Campo para la condición con una lista de opciones */}
                <label htmlFor="condition">Condición</label>             
                <input 
                    list="conditions" 
                    name="condition" 
                    placeholder="condicion"
                    className="text-[20px] w-full box-border p-[10px_12px] my-[20px] bg-none border-b-[3px] border-b-black"
                    onChange={handleInputChange} 
                />
                <datalist id="conditions">
                    <option value="No aplica"></option>
                    <option value="Adulto mayor"></option>
                    <option value="Mujer Embarazada"></option>
                    <option value="Condición de Discapacidad"></option>
                </datalist>
                
                {/* Botón de envío del formulario */}
                <button 
                    type="submit" 
                    className="bg-[#1E1E1E] w-[150px] h-[50px] text-white py-3 mt-4 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block"
                >Enviar</button>
            </form>
        </div>
    );
};

export default Form;
