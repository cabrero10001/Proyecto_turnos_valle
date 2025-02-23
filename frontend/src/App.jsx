// Importa los estilos globales de la aplicación desde index.css
import "../src/index.css";

// Importa los componentes Form y Ticket desde sus respectivas rutas
import Form from "../src/components/qr_option/form/form";
import Ticket from "../src/components/qr_option/ticket/ticket";
import ticketop from "../src/components/operador/ticket/ticket_op"; // Nuevo componente operador ticket
import formop from "../src/components/operador/form/form_op"; // Nuevo componente operador form

// Importa las herramientas necesarias de React Router para manejar la navegación
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Componente principal de la aplicación
function App() {
  return (
    // Envuelve la aplicación en BrowserRouter para habilitar la funcionalidad de enrutamiento
    <BrowserRouter>
      <Routes>
        {/* Define la ruta principal ("/") y renderiza el componente Form */}
        <Route path="/" element={<Form />} />

        {/* Define la ruta "/ticket" y renderiza el componente Ticket */}
        <Route path="/ticket" element={<Ticket />} />

        {/* Define una nueva ruta "/about" y renderiza el componente About */}
        <Route path="/ticketop" element={<ticketop />} />

        {/* Define una nueva ruta "/contact" y renderiza el componente Contact */}
        <Route path="/formop" element={<formop />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporta el componente App para que pueda ser usado en otros archivos
export default App;
