import React, {useEffect, useRef} from 'react';
import {Outlet} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";


/* COMPONENTES */
import Sidebar from "../partials/Sidebar.jsx";
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";

// PrimeReact
import {Toast} from 'primereact/toast';
import {ConfirmDialog} from 'primereact/confirmdialog';

const MainLayout = () => {

    const {user} = useAuth();
    const [sidebarActive, setSidebarActive] = React.useState(true);
    const toast = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                setSidebarActive(false);
            } else {
                setSidebarActive(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <div className="main-layout">

            {/* Toast y ConfirmDialog */}
            <Toast ref={toast}/>
            <ConfirmDialog/>

            {/* PARA MOVIL */}

                {/*<div*/}
                {/*    className="sidebar ${!sidebarActive ? 'collapsed' : ''}"*/}
                {/*    // className="fixed inset-0 z-4 bg-black-alpha-40 lg:hidden backdrop-blur-sm"*/}
                {/*    onClick={toggleSidebar}*/}
                {/*    // style={{zIndex: 1000}}*/}
                {/*>*/}
                    <Sidebar user={user} active={sidebarActive} onToggle={toggleSidebar}/>
                {/*</div>*/}



            {/*{sidebarVisible && (*/}
            {/*    <div className={`sidebar-overlay ${sidebarVisible ? 'visible' : ''}`}*/}
            {/*         onClick={toggleSidebar}*/}
            {/*    />*/}
            {/*)}*/}

            {/* SIDEBAR */}

            {/*<Sidebar*/}
            {/*    user={user}*/}
            {/*    active={sidebarActive}*/}
            {/*    onToggle={toggleSidebar}*/}
            {/*/>*/}

            {/* CONTAINER PRINCIPAL */}

            <div
                className={`main-content ${sidebarActive ? 'with-sidebar' : 'full-width'}`}
                // className={`flex flex-column transition-all transition-duration-300 w-full min-h-screen ${sidebarActive ? 'ml-0 lg:ml-72' : 'ml-0'}`}
            >

                {/* HEADER */}
                <Header
                    user={user}
                    onMenuToggle={toggleSidebar}
                    sidebarActive={sidebarActive}
                />

                {/* Area del contenido  */}

                <main
                    className="content-area"
                    // className="flex-1 flex flex-column p-3 md:p-4"
                >
                    {/* Tarjeta contenedora del contenido real */}
                    <div
                        className="content-container surface-card shadow-2"
                        // className="flex-1 bg-white border-round-xl shadow-1 p-3 md:p-4 mb-4"
                    >
                        <Outlet/>
                    </div>

                    <Footer/>
                </main>

                {/*<main className="content-area">*/}
                {/*    <div className="content-container">*/}
                {/*        <Outlet/> /!* Renderiza rutas hijas*!/*/}
                {/*    </div>*/}
                {/*</main>*/}

            </div>

            {/* FOOTER */}
            {/*<Footer/>*/}

        </div>
    );
}

export default MainLayout;