import {useAuth} from "../../context/AuthContext.jsx";
import React from "react";

import AdminDashboard from "./AdminDashboard.jsx";
import TecnicoDashboard from "./TechnicalDashboard.jsx";
import SecretaryDashboard from "./SecretaryDashboard.jsx";
import {ProgressSpinner} from "primereact/progressspinner";

export const DashboardSelector = () => {

    // Se ontiene el usuario de AuthContext
    const {user, loding} = useAuth();

    // 2. Si el AuthContext todavía está cargando la sesión, mostramos un spinner
    if(loding){
        return(
          <div className="flex justify-center align-items-center h-screen">
              {/*<i className="pi pi-spin pi-spinner " style={{fontSize: '2rem'}} />*/}
              <ProgressSpinner/>
          </div>
        );
    }

    //Evaluar  por ROL
    switch (user?.rol.toUpperCase()) {
        case 'ADMIN': return <AdminDashboard />;
        case 'TECNICO': return <TecnicoDashboard />;
        case 'SECRETARIA': return <SecretaryDashboard />;
        default:
            return (
                <div className="p-4 bg-red-100 text-red-700 border-round">
                    Error: No tienes permisos asignados o el rol es inválido.
                </div>
            );
    }



}

export default DashboardSelector;