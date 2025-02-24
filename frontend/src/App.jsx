// Importa los estilos globales de la aplicación desde index.css
import "../src/index.css";

// Importa los componentes Form, Ticket, Ticketop y Formop desde sus respectivas rutas
import Form from "../src/components/qr_option/form/form";
import Ticket from "../src/components/qr_option/ticket/ticket";
import Ticketop from "../src/components/operador/ticket/ticket_op"; // Nuevo componente operador ticket
import Formop from "../src/components/operador/form/form_op"; // Nuevo componente operador form
import Screen from "./components/mainScreen/screen"

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

        {/* Define la ruta "/ticketop" y renderiza el componente Ticketop */}
        <Route path="/ticketop" element={<Ticketop />} />

        {/* Define la ruta "/formop" y renderiza el componente Formop */}
        <Route path="/formop" element={<Formop />} />

        {/* Define una nueva ruta "/screen" y renderiza el componente Screen */}
        <Route path="/screen" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporta el componente App para que pueda ser usado en otros archivos
export default App;
