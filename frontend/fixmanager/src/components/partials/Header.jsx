import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Badge} from "primereact/badge";
import {Avatar} from "primereact/avatar";

const Header = ({user, onMenuToggle, sidebarActive}) => {

    const navigate = useNavigate();

    // const getRoleColor = (rol) => {
    //     switch (rol?.toLowerCase()) {
    //         case 'admin':
    //             return '#6366F1';
    //         case 'tecnico':
    //             return '#10B981';
    //         case 'secretaria':
    //             return '#8B5CF6';
    //         default:
    //             return '#6B7280';
    //     }
    // };

    console.log('Header SIDE BAR COLLAPSED:', sidebarActive);

    return (
        <header
            // className="px-4 h-5rem flex align-items-center justify-content-between shadow-1 sticky top-0 z-3">
            className="header"
        >
            {/* LADO IZQUIERDO */}
            <div
                // className="flex align-items-center"
                className="header-left"
            >
                {/* El botón que controla el Sidebar */}
                <Button
                    icon={sidebarActive ? "pi pi-chevron-left" : "pi pi-bars"}
                    onClick={onMenuToggle}
                    // className="menu-toggle-btn mr-3"
                    className="p-button-rounded p-button-text p-button-secondary mr-3"
                />

                <div
                    // className="flex flex-column"
                    className="breadcrumb hidden md:flex align-items-center gap-2"
                >
                    <span className="text-500">Dashboard</span>
                    <i className="pi pi-chevron-right mx-2 text-400" style={{fontSize: '0.8rem'}}/>
                    <span className="font-bold text-color uppercase" style={{fontSize: '0.8rem'}}>
                        Panel de {user?.rol?.charAt(0).toUpperCase() + user?.rol?.slice(1).toLowerCase()}
                    </span>
                </div>
            </div>

            {/* LADO DERECHO Campana y Usuario */}
            <div
                className="header-right flex align-items-center gap-3"
                // className="flex align-items-center gap-2"
            >
                <Button
                    icon="pi pi-bell"

                    onClick={() => navigate('/notifications')}
                >
                    <Badge value="3" severity="danger"></Badge>
                </Button>

                <div
                    className="user-profile flex align-items-center gap-3 pl-3 border-left-1 surface-border"

                >
                    <div
                        className="flex flex-column text-right hidden sm:flex"

                    >
                        <span className="text-color font-bold line-height-1">{user?.fullName}</span>
                        <span className="text-500 font-medium uppercase">{user?.rol}</span>
                        {/*{user?.fullName?.charAt(0).toUpperCase()}*/}
                    </div>
                    <Avatar
                        label={user?.fullName?.charAt(0).toUpperCase()}
                        shape="circle"
                        size="large"
                        className="bg-primary text-white"

                    />
                    <div
                        className="user-info-text hidden md:flex"

                    >

                    </div>
                    <small className="text-500 font-medium lowercase">En línea</small>
                </div>
                {/*</div>*/}
            </div>
        </header>

        // <header className="header">
        //     <div className="header-left">
        //         <Button
        //             className="p-button-text p-button-rounded mr-3"
        //             icon={sidebarActive ? "pi pi-bars" : "pi pi-chevron-left"}
        //             onClick={onMenuToggle}
        //             tooltip={sidebarActive ? "Mostrar Menu" : "Ocultar Menu"}
        //         />
        //
        //         <div className="breadcrumb">
        //             <span className="text-500">Dashboard</span>
        //             <i className="pi pi-chevron-right mr-2 text-300"/>
        //             <span className="font-medium">
        //             {user?.rol === 'ADMIN' ? 'Administracion' : user?.rol === 'TECNICO' ? 'Tecnico' : 'Secretaria'}
        //         </span>
        //         </div>
        //     </div>
        //
        //     {/*<div className="header-center">*/}
        //     {/*    <i className="pi pi-search mr-3"/>*/}
        //     {/*    <span className="p-input-icon-left">*/}
        //     {/*        <InputText className="w-20rem" placeholder="Buscar"/>*/}
        //     {/*    </span>*/}
        //     {/*</div>*/}
        //
        //     <div className="header-right">
        //         <Button icon="pi pi-bell" className="p-button-text p-button-rounded relative"
        //                 onClick={() => navigate('/notifications')}
        //         >
        //             <Badge value={5} severity="danger" className="p-absolute top-0 right-0"/>
        //         </Button>
        //     </div>
        //
        // </header>
    )
}

export default Header;