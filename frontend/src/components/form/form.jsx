import { useState } from "react";
import ipsLogo from "../../images/ips.png"

/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Documento
 * - Condición
 */
const Form = () => {
    const [values, setValues] = useState({
        name: "",
        typeDocument: "",
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
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">

            {/* imagen de la ips */}
            <div className="absolute top-0 left-0 m-4">
                <img src={ipsLogo} alt="IPS Logo" className="w-30 h-15" />
            </div>
            
            {/* Contenedor del formulario con estilos de fondo, bordes y espaciado */}
            <form className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-[40px_50px_0px_50px] w-[500px] h-[600px] mx-auto mt-[50px] rounded-[0]" onSubmit={handleSubmit}>
                {/* Contenedor adicional para el formulario (coso negro)*/} 
                <div className="absolute w-[192px] h-[60px] left-1/2 top-[40px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
                
                {/* Título del formulario */}
                <h1 className="text-center text-[27px] mb-[18px] font-extrabold leading-[30px] tracking-[5px] whitespace-pre-line">FORMULARIO {"\n"}DE{"\n"} REGISTRO</h1>
                
                {/* Campo para el nombre */}
                <label htmlFor="name" className="font-bold">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    className="text-[14px] w-full box-border p-[10px_12px] mb-[15px] bg-none border-b-[3px] border-b-[#6EA3C7]"
                    onChange={handleInputChange}
                />
                {/* Campo para el TIPO DE DOCUMENTO */}
                <label htmlFor="condition" className="font-bold">Tipo de Documento</label>             
                <input 
                    list="typeDocument" 
                    name="typeDocument" 
                    className="text-[14px] w-full box-border bg-[#fff] p-[8px_12px] mb-[15px] mt-[10px]"
                    onChange={handleInputChange} 
                    placeholder="C.C"
                />
                <datalist id="typeDocument">
                    <option value="Cédula de ciudadania"></option>
                    <option value="Pasaporte "></option>
                    <option value="Tarjeta de identidad"></option>
                    <option value="Cédula de extranjeria"></option>
                    <option value="Registro civil"></option>
                    <option value="Permiso especial de permanencia"></option>
                </datalist>
                {/* Campo para el documento */}
                <label htmlFor="document" className="font-bold">Documento</label>
                <input 
                    type="number" 
                    name="document" 
                    className="text-[14px] w-full box-border p-[10px_12px] mb-[15px] bg-none border-b-[3px] border-b-[#6EA3C7]"
                    onChange={handleInputChange}
                />
                
                {/* Campo para la condición con una lista de opciones */}
                <label htmlFor="condition" className="font-bold">Condición</label>             
                <input 
                    list="conditions" 
                    name="condition" 
                    className="text-[14px] w-full box-border bg-[#fff] p-[8px_12px] mb-[15px] mt-[10px]"
                    onChange={handleInputChange} 
                    placeholder="N/A"
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
                    className="bg-[#6EA3C7] font-bold w-[150px] h-[50px] text-white py-3 mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block"
                >ENVIAR</button>
            </form>
        </div>
    );
};

export default Form;
