import React from 'react';
import {Outlet} from "react-router-dom";

const AuthLayout = () => {

    return(
      <div className="auth-layout">

          <div className="auth-background">
              <div className="auth-background-overlay"></div>
              <div className="auth-background-content">
                  <i className="pi pi-id-card text-8xl text-white opacity-50"/>
                  <h1 className="text-5xl font-bold text-white mt-4">FixManager</h1>
                  <p className="text-1xl text-withe opacity-75 mt-2">Sistema de Gestion de tickets</p>

                  {/* CONTENIDO PRINCIPAL DEL FORM  */}
                  <div className="auth-content mt-8">
                      <div className="auth-card-container">
                          <Outlet/>
                      </div>



                  </div>


              </div>
          </div>
          {/* Footer del auth layout */}
          <footer className="auth-footer">
              <p className="text-600 text-sm">
                  © {new Date().getFullYear()} FixManager. Todos los derechos reservados.
              </p>
              <div className="auth-footer-links">
                  <a href="/privacy" className="text-600 hover:text-primary text-sm">Privacidad</a>
                  <span className="mx-2 text-400">•</span>
                  <a href="/terms" className="text-600 hover:text-primary text-sm">Términos</a>
                  <span className="mx-2 text-400">•</span>
                  <a href="/help" className="text-600 hover:text-primary text-sm">Ayuda</a>
              </div>
          </footer>
      </div>
    );

}

export default AuthLayout;