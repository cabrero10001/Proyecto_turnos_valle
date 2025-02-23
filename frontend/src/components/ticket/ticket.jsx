import ipsLogo from "../../images/ips.png";

export default function Ticket() {
  return (
    <center>
      {/* Contenedor principal con fondo degradado y desplazamiento vertical si es necesario */}
      <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
        {/* Imagen del logo en la esquina superior izquierda */}
        <div className="absolute top-0 left-0 m-4">
          <img src={ipsLogo} alt="IPS Logo" className="w-30 h-15" />
        </div>

        {/* Contenedor del formulario */}
        <div>
          <form className="bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-[40px_50px_0px_50px] w-[500px] h-[600px] mx-auto mt-[40px] rounded-[0]">
            {/* Elemento decorativo en la parte superior del formulario */}
            <div className="absolute w-[192px] h-[60px] left-1/2 top-[30px] bg-[#1E1E1E] rounded-[10px] -translate-x-1/2"></div>

            {/* Título principal */}
            <h1 className="text-[30px] tracking-widest mt-1 mb-4 font-extrabold">
              TURNO GENERADO
            </h1>

            {/* SVG con el diseño y los textos */}
            <svg
              width="300"
              height="395.25"
              viewBox="0 0 359 527"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 31.1915C0.5 20.8689 5.80706 11.2713 14.5498 5.78306L15.7981 4.99945C26.1875 -1.52251 39.5009 -1.06226 49.4151 6.16163L53.0571 8.8153C58.2174 12.5754 62.0436 17.8837 63.9789 23.9683L84.481 88.4252C85.4867 91.5871 87.01 94.5603 88.9888 97.2236L114.004 130.892C119.664 138.51 128.594 143 138.085 143H183H229.14C240.145 143 250.267 136.974 255.513 127.299L272.811 95.394C273.602 93.9345 274.271 92.4118 274.81 90.8416L297.841 23.7983C299.894 17.821 303.783 12.6449 308.952 9.00842L313.336 5.9243C323.327 -1.10423 336.659 -1.08436 346.629 5.97392V5.97392C354.273 11.3859 358.817 20.1701 358.817 29.5363V256.432C358.817 260.567 357.963 264.657 356.307 268.445L258.536 492.178C255.314 499.549 249.268 505.318 241.753 508.189L220 516.5L192.45 525.435C186.314 527.425 179.7 527.384 173.588 525.319L147.5 516.5L125.128 508.007C117.853 505.245 111.936 499.764 108.626 492.722L3.35002 268.764C1.47312 264.771 0.5 260.413 0.5 256.002V31.1915Z"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />

              {/* Texto del nombre dentro del SVG */}
              <text
                x="50%"
                y="38%"
                textAnchor="middle"
                fill="black"
                fontSize="42px"
                dy=".3em"
                textLength="250"
                lengthAdjust="spacingAndGlyphs"
                fontWeight="bold"
              >
                Juan Valderrama
              </text>

              {/* Texto de la fecha dentro del SVG */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="black"
                fontSize="28px"
                dy=".3em"
              >
                30/02/2025
              </text>

              {/* Texto del número dentro del SVG */}
              <text
                x="50%"
                y="74%"
                textAnchor="middle"
                fill="black"
                fontSize="144px"
                dy=".3em"
                fontWeight="bold"
              >
                69
              </text>
            </svg>

            {/* Mensaje de espera */}
            <div className="mt-5">
              <label className="text-[18px] tracking-widest underline mb-4">
                ESPERA AL LLAMADO DEL NÚMERO
              </label>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}
