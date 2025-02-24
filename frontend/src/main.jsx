import { StrictMode } from "react"; // Importa StrictMode de React para ayudar a detectar problemas potenciales en la aplicación
import { createRoot } from "react-dom/client"; // Importa createRoot para crear la raíz del árbol de componentes de React en el DOM
import "./index.css"; // Importa los estilos globales de la aplicación desde el archivo index.css
import App from "./App.jsx"; // Importa el componente principal de la aplicación desde el archivo App.jsx

// Crea una raíz de React en el elemento del DOM con el ID 'root' y renderiza la aplicación dentro de StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Renderiza el componente principal de la aplicación */}
    <App />
  </StrictMode>
);
