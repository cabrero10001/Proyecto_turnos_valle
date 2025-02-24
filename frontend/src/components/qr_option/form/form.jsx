import { useState } from "react";
import ipsLogo from "../../../images/ips.png";
import { Link } from "react-router-dom";

/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Documento
 * - Condición
 */
const Form = () => {
  // Define el estado inicial del formulario con campos vacíos
  const [values, setValues] = useState({
    name: "",
    typeDocument: "",
    document: "",
    condition: "",
  });

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (event) => {
    // Desestructura el evento para obtener el nombre y el valor del campo
    const { name, value } = event.target;
    // Actualiza el estado del formulario
    setValues({
      // Mantiene los valores anteriores del estado
      ...values,
      // Actualiza el valor del campo que ha cambiado
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();
    // Muestra los valores del formulario en la consola
    console.log(values);
  };

  return (
    // Contenedor principal con estilos de fondo y altura mínima de pantalla
    <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
      {/* Contenedor de la imagen de la IPS */}
      <div className="absolute top-0 left-0 m-4">
        {/* Imagen de la IPS */}
        <img
          src={ipsLogo}
          alt="IPS Logo"
          className="w-20 h-10 md:w-30 md:h-15" // Mantiene el tamaño original
        />
      </div>

      {/* Contenedor del formulario con estilos de fondo, bordes y espaciado */}
      <form
        className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-5 md:p-[40px_50px_0px_50px] w-[90%] max-w-[500px] h-auto md:h-[600px] mx-auto mt-[80px] mb-[20px] rounded-[0]" // Mantiene el tamaño original
        onSubmit={handleSubmit}
      >
        {/* Contenedor adicional para el formulario (coso negro) */}
        <div className="absolute w-[150px] h-[50px] md:w-[192px] md:h-[60px] left-1/2 top-[20px] md:top-[30px] mt-[50px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
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
        {/* Lista de opciones para el tipo de documento */}
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
        {/* Lista de opciones para la condición */}
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
