import React, {useRef} from 'react';
import {Outlet} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";


/* COMPONENTES */
import Sidebar from "../partials/Sidebar.jsx";
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";

// PrimeReact
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';

const MainLayout = () => {

    const {user} = useAuth();
    const [sidebarVisible, setSidebarVisible] = React.useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
    const toast = useRef(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebarCollapse = () =>{
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return(
        <div className="main-layout">

            {/* Toast y ConfirmDialog */}
            <Toast ref={toast} />
            <ConfirmDialog />

            {/* PARA MOVIL */}
            {sidebarVisible && (
                <div className={`sidebar-overlay ${sidebarVisible ? 'visible' : ''}`}
                     onClick={toggleSidebar}
                />
            )}

            {/* SIDEBAR */}

            <Sidebar
                visible={sidebarVisible}
                collapsed={sidebarCollapsed}
                user={user}
                onToggle={toggleSidebarCollapse}
            />

            {/* CONTAINER PRINCIPAL */}

            <div
                className={`main-content ${!sidebarVisible ? 'full-width' : ''} 
                ${sidebarCollapsed ? 'collapsed-sidebar' : ''}`} >

                {/* HEADER */}
                <Header
                    user={user}
                    onMenuToggle={toggleSidebar}
                    sidebarCollapsed={sidebarCollapsed}
                />

                {/* Area del contenido  */}

                <main className="content-area" >
                    <div className="content-container">
                        <Outlet /> {/* Renderiza rutas hijas*/}
                    </div>
                </main>

            </div>

            {/* FOOTER */}
            {/*<Footer/>*/}

        </div>
    );
}

export default MainLayout;