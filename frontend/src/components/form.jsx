import './form.module.css';

export default function form () {
    return (
        <div>
            <form action="/form" >
                <label>Tipo de documento:</label>
                <select name="Documento" id="Documento">
                    <option value="Cédula de ciudadania">Cédula de ciudadania</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Cédula de extrangeria">Cédula de extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Registro Civil">Registro Civil</option>
                    <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                </select>
                <label>No. Cédula:</label>
                <input type="text" name="cedula" placeholder="Cédula" />
                <label>Nombre:</label>
                <input type="text" name="nombre" placeholder="Nombre" />
                <label>Seleccione su condición:</label>
                <select name="Condicion" id="condicion">
                    <option value="Ninguna">Ninguna</option>
                    <option value="Adulto Mayor">Adulto Mayor</option>
                    <option value="Mujer Embarazada-con niño en brazos">Mujer Embarazada-con niño en brazos</option>
                    <option value="Persona en condicion de Discapacidad">Persona en condición de Discapacidad</option>
                </select>
                
                        
                <input type="submit" value="Ok" />
            </form>
        </div>
    )
}