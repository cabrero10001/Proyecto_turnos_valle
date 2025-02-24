import ipsLogo from "../../../images/ips.png";

export default function Ticket() {
  return ( 
    <div>
      
      <div className="relative min-h-screen w-screen bg-gradient-to-l from-[#E1EAF0] via-[#4187B5] to-[#2F688D] overflow-y-auto">
        {/*Contenedor de la imagen del logo de la IPS.Posicionado de forma absoluta en la esquina superior izquierda.*/}
        <div className="absolute top-0 left-0 m-4">
          {/*Imagen del logo de la IPS.La clase 'w-30 h-15' define el ancho y alto de la imagen. */}
          <img
            src={ipsLogo}
            alt="IPS Logo"
            className="w-20 h-10 md:w-30 md:h-15"
          />
        </div>

        {/* Contenedor del tickete */}
        <div class="">
          {/*
            Formulario con estilos de fondo, borde, padding, ancho máximo,
            altura automática, márgenes y esquinas redondeadas.
          */}
          <form className="absolute right-[0] bg-[#d9d9d9] border-[20px] border-[#3c3c3c] p-7.5 w-[45%] max-w-[1000px] h-auto rounded-[0]">

            {/* Título principal del formulario */}
            <h1 className="text-[36px] text-center tracking-widest mb-10 font-extrabold">
              TURNO GENERADO
            </h1>

            {/*
              Contenedor SVG para el diseño del ticket.
              Define el ancho, alto, viewBox y namespace.
            */}
            <svg
              
              height="380" // Aumentado en un 50%
              viewBox="0 0 359 527"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-15"
            >
              {/*
                Ruta (path) que define la forma del ticket.
                Utiliza coordenadas y curvas para dibujar la forma.
                Relleno de color blanco, borde negro.
              */}
              <path
                d="M0.5 31.1915C0.5 20.8689 5.80706 11.2713 14.5498 5.78306L15.7981 4.99945C26.1875 -1.52251 39.5009 -1.06226 49.4151 6.16163L53.0571 8.8153C58.2174 12.5754 62.0436 17.8837 63.9789 23.9683L84.481 88.4252C85.4867 91.5871 87.01 94.5603 88.9888 97.2236L114.004 130.892C119.664 138.51 128.594 143 138.085 143H183H229.14C240.145 143 250.267 136.974 255.513 127.299L272.811 95.394C273.602 93.9345 274.271 92.4118 274.81 90.8416L297.841 23.7983C299.894 17.821 303.783 12.6449 308.952 9.00842L313.336 5.9243C323.327 -1.10423 336.659 -1.08436 346.629 5.97392V5.97392C354.273 11.3859 358.817 20.1701 358.817 29.5363V256.432C358.817 260.567 357.963 264.657 356.307 268.445L258.536 492.178C255.314 499.549 249.268 505.318 241.753 508.189L220 516.5L192.45 525.435C186.314 527.425 179.7 527.384 173.588 525.319L147.5 516.5L125.128 508.007C117.853 505.245 111.936 499.764 108.626 492.722L3.35002 268.764C1.47312 264.771 0.5 260.413 0.5 256.002V31.1915Z"
                fill="#fff
                "
                stroke=""
                strokeWidth="2"
              />

              {/*
                Texto del nombre dentro del SVG.
                Centrado horizontal y verticalmente.
                Color negro, tamaño de fuente ajustado, negrita.
              */}
              <text
                x="50%"
                y="38%"
                textAnchor="middle"
                fill="black"
                fontSize="60px" // Aumentado en un 50%
                dy=".3em"
                textLength="320" // Aumentado en un 50%
                lengthAdjust="spacingAndGlyphs"
                fontWeight="bold"
              >
                Juan Valderrama
              </text>

              {/*
                Texto de la fecha dentro del SVG.
                Centrado horizontal y verticalmente.
                Color negro, tamaño de fuente ajustado.
              */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="black"
                fontSize="48px" // Aumentado en un 50%
                dy=".3em"
              >
                30/02/2025
              </text>

              {/*
                Texto del número dentro del SVG.
                Centrado horizontal y verticalmente.
                Color negro, tamaño de fuente ajustado, negrita.
              */}
              <text
                x="50%"
                y="74%"
                textAnchor="middle"
                fill="black"
                fontSize="108px" // Ajustado para hacerlo más pequeño en móviles
                dy=".3em"
                fontWeight="bold"
              >
                69
              </text>
            </svg>

            {/*
              Mensaje de espera.
              Alineado al centro, con subrayado.
            */}
            <div className="mt-2 text-center">
              <label className="text-[24px] tracking-widest underline mb-6">
                ESPERA AL LLAMADO DEL NÚMERO
              </label>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
