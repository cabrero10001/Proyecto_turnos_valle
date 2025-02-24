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
const formop = () => {
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
      {/* imagen de la ips */}
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
        className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-5 md:p-[40px_50px_0px_50px] w-[90%] max-w-[1000px] h-auto md:h-[650px] mx-auto mt-[20px] mb-[50px] rounded-[0]" // Mantiene el tamaño original
        onSubmit={handleSubmit}
      >
        {/* Contenedor adicional para el formulario (coso negro) */}
        <div className="absolute w-[150px] h-[50px] md:w-[192px] md:h-[60px] left-1/2 top-[20px] md:top-[30px] mt-[-10px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
        {/* Título del formulario */}
        <h1 className="text-center text-[30.6px] md:text-[34.65px] mb-[22.95px] mt-[5px] font-extrabold leading-[38.25px] tracking-[6.375px] whitespace-pre-line">
          FORMULARIO {"\n"}DE{"\n"} REGISTRO
        </h1>
        {/* Campo para el nombre */}
        <label htmlFor="name" className="font-bold text-[12.393px] mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="text-[12.393px] w-full box-border p-[11.475px_13.5px] mb-[16.2px] bg-none border-b-[3.2625px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />
        {/* Campo para el TIPO DE DOCUMENTO */}
        <label
          htmlFor="typeDocument"
          className="font-bold text-[12.393px] mb-2"
        >
          Tipo de Documento
        </label>
        <input
          list="typeDocument"
          name="typeDocument"
          className="text-[12.393px] w-full box-border bg-[#fff] p-[8.67px_13.5px] mb-[16.2px] mt-[10.8375px]" // Reducido en un 15%
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
        <label htmlFor="document" className="font-bold text-[12.393px] mb-2">
          Documento
        </label>
        <input
          type="number"
          name="document"
          className="text-[12.393px] w-full box-border p-[11.475px_13.5px] mb-[16.2px] bg-none border-b-[3.2625px] border-b-[#6EA3C7]" // Reducido en un 15%
          onChange={handleInputChange}
        />
        {/* Campo para la condición con una lista de opciones */}
        <label htmlFor="condition" className="font-bold text-[12.393px] mb-2">
          Condición
        </label>
        <input
          list="conditions"
          name="condition"
          className="text-[12.393px] w-full box-border bg-[#fff] p-[8.67px_13.5px] mb-[16.2px] mt-[10.8375px]" // Reducido en un 15%
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
          className="bg-[#6EA3C7] font-bold w-[162.5625px] h-[54.1875px] text-white py-[3.2625px] mt-0 rounded-lg hover:bg-[#3c3c3c] transition-colors mx-auto block text-[12.393px]"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default formop;
