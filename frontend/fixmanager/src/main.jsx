import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { PrimeReactProvider } from "primereact";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './index.css'
import App from './App.jsx'

// Configuración óptima para tu app
// const primereactConfig = {
//   ripple: true,           // Efectos visuales modernos
//   inputStyle: 'outlined', // Inputs con borde
//   //unstyled: false         // Usar estilos por defecto de PrimeReact
// }

//PrimeReact.ripple = true;
//PrimeReact.inputStyle = 'outlined';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <PrimeReactProvider value={primereactConfig}>
//       <App />
//     </PrimeReactProvider>
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimeReactProvider> */}
      <App />
    {/* </PrimeReactProvider> */}
  </StrictMode>,
)