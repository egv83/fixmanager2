import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { PrimeReactProvider } from "primereact";

// PrimeReact CSS
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

// Estilos personalizados
import './styles/index.css';
import './styles/theme.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/dashboard.css';
import './styles/auth.css';

import App from './App.jsx'

// const primereactConfig = {
//     ripple: true,
//     inputStyle: 'outlined'
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*<PrimeReactProvider value={primereactConfig}>*/}
      <App />
     {/*</PrimeReactProvider>*/}
  </StrictMode>
)