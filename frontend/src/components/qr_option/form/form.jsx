// Importa useState para manejar el estado del formulario y useNavigate para la redirección
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

// Importa la imagen del logo de la IPS
import ipsLogo from "../../../images/ips.png";
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
    condition: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target; //se desestructura el event.target el cual acumula el name,value y type de los input
    setValues({
      //se modifica el estado de 'values'
      ...values, // guarda las claves y valores anteriores
      [name]: value, //se guarda en 'value' el name y value del input modificado
    });
  };

  const navigate = useNavigate(); // Permite la navegación entre rutas

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    console.log(values); // Muestra los datos en la consola
    navigate("/ticket"); // Redirige a la ruta "/ticket"
  };

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
      {/* imagen de la ips */}
      <div className="absolute top-0 left-0 m-4">
        <img
          src={ipsLogo}
          alt="IPS Logo"
          className="w-20 h-10 md:w-30 md:h-15" // Manteniendo el tamaño original
        />
      </div>

      {/* Contenedor del formulario con estilos de fondo, bordes y espaciado */}
      <form
        className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-5 md:p-[40px_50px_0px_50px] w-[90%] max-w-[500px] h-auto md:h-[600px] mx-auto mt-[80px] mb-[20px] rounded-[0]" // Manteniendo el tamaño original
        onSubmit={handleSubmit}
      >
        {/* Contenedor adicional para el formulario (coso negro) */}
        <div className="absolute w-[150px] h-[50px] md:w-[192px] md:h-[60px] left-1/2 top-[20px] md:top-[30px] mt-[50px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>{" "}
        {/* Título del formulario */}
        <h1 className="text-center text-[20.4px] md:text-[23.1px] mb-[15.3px] font-extrabold leading-[25.5px] tracking-[4.25px] whitespace-pre-line">
          FORMULARIO {"\n"}DE{"\n"} REGISTRO
        </h1>
        {/* Campo para el nombre */}
        <label htmlFor="name" className="font-bold">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="text-[10.2px] w-full box-border p-[7.65px_9px] mb-[10.8px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />
        {/* Campo para el TIPO DE DOCUMENTO */}
        <label htmlFor="typeDocument" className="font-bold">
          Tipo de Documento
        </label>
        <input
          list="typeDocument"
          name="typeDocument"
          className="text-[10.2px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[10.8px] mt-[7.225px]" // Reducido en un 15%
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
        <label htmlFor="document" className="font-bold">
          Documento
        </label>
        <input
          type="number"
          name="document"
          className="text-[10.2px] w-full box-border p-[7.65px_9px] mb-[10.8px] bg-none border-b-[2.175px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />
        {/* Campo para la condición con una lista de opciones */}
        <label htmlFor="condition" className="font-bold">
          Condición
        </label>
        <input
          list="conditions"
          name="condition"
          className="text-[10.2px] w-full box-border bg-[#fff] p-[5.78px_9px] mb-[10.8px] mt-[7.225px]" // Reducido en un 15%
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
          className="bg-[#6EA3C7] font-bold w-[108.375px] h-[36.125px] text-white py-[2.175px] mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block" // Reducido en un 15%
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Form;
