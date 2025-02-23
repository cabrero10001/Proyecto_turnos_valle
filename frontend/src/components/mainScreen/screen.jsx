import { useState, useEffect} from "react";
import ipsLogo from "../../images/ips.png";
/**
 * Componente funcional Form
 * Este componente representa un formulario de registro con los campos:
 * - Nombre
 * - Tipo de Documento   
 * - Documento
 * - Condición
 */
const Screen = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Actualiza cada segundo

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    // Formato de fecha y hora
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentTime.toLocaleDateString("es-ES", options);
    const formattedTime = currentTime.toLocaleTimeString("es-ES");

    return (
        <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto flex items-center justify-center">
            <div className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] w-[1150px] h-[670px] mx-auto rounded-[0] box-border relative">
                
                {/* Sección Izquierda */}
                <div className="flex flex-col justify-evenly ml-[20px] w-[40%] h-[630px] bg-none">
                    <div className="w-[421px] h-[90px] p-[0_50px] bg-none border-[3px] rounded-[20px] box-border flex justify-between items-center">
                        <h2 className="font-bold whitespace-pre-line">
                            MODULO /{"\n"} CONSULT
                        </h2>
                        <h2 className="font-bold text-right">
                            NOMBRE - TURNO
                        </h2>
                    </div>
                    <div className="w-[421px] h-[90px] bg-[#FFCB1F] rounded-[20px] flex justify-center items-center">
                        {/* SEÑALADOR DE TURNO*/}
                        <div className="w-[421px] h-[90px] bg-none rounded-[20px]">
                            <div class="  translate-x-[390%] translate-y-[37%] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[40px] border-r-blue-600"></div>
                        </div>
                        <p className="w-[300px]">Javier Gomez</p>
                    </div>
                    <div className="w-[421px] h-[90px] bg-[#FF4545] rounded-[20px]">
                        {/* SEÑALADOR DE TURNO*/}
                        <div className="w-[421px] h-[90px] bg-none rounded-[20px]">
                            <div class="  translate-x-[390%] translate-y-[37%] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[40px] border-r-blue-600"></div>
                        </div>
                    </div>
                    <div className="w-[421px] h-[90px] bg-[#FF4545] rounded-[20px]">
                        {/* SEÑALADOR DE TURNO*/}
                        <div className="w-[421px] h-[90px] bg-none rounded-[20px]">
                            <div class="  translate-x-[390%] translate-y-[37%] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[40px] border-r-blue-600"></div>
                        </div>
                    </div>
                    <div className="w-[421px] h-[90px] bg-[#FF4545] rounded-[20px]">
                        {/* SEÑALADOR DE TURNO*/}
                        <div className="w-[421px] h-[90px] bg-none rounded-[20px]">
                            <div class="  translate-x-[390%] translate-y-[37%] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[40px] border-r-blue-600"></div>
                        </div>
                    </div>
                    <div className="w-[421px] h-[90px] bg-[#FF4545] rounded-[20px]">
                        {/* SEÑALADOR DE TURNO*/}
                        <div className="w-[421px] h-[90px] bg-none rounded-[20px]">
                            <div class="  translate-x-[390%] translate-y-[37%] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[40px] border-r-blue-600"></div>
                        </div>
                    </div>
                </div>
                {/* SECCION (Derecha) */}
                <div className="absolute right-10 top-[50%] translate-y-[-50%] bg-[#d9d9d9] border-[20px] border-[#3c3c3c] w-[550px] h-[400px] rounded-[0]">
                    {/*IMAGEN IPS*/}
                    <div className="absolute  left-[40%] top-[-115px] w-[120px] ">
                        <img src={ipsLogo} alt="IPS Logo" />
                    </div>
                    <h2 className="text-[30px] font-bold text-center translate-y-[47%] tracking-[7px] uppercase underline">turno actual</h2>
                    <h2 className="text-[40px] font-bold text-center translate-y-[60px] uppercase">Javier Alexander gomez</h2>
                    <h2 className="text-[60px] font-bold text-center translate-y-[60px] text-[#9B0000] uppercase underline ">turno</h2>
                    {/* Contenedor adicional para el formulario (coso negro)*/} 
                    <div className="absolute w-[192px] h-[60px] left-1/2 top-[-40px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>
                    {/*FECHA ACTUAL*/}
                    <h2 className="absolute  left-[20%] bottom-[-75px] font-bold text-[20px] uppercase">{formattedDate}</h2>
                    <h2 className="absolute  left-[40%] bottom-[-105px] font-bold text-[20px] ">{formattedTime}</h2>
                </div>


            </div>

        </div>

    );
};

export default Screen;
