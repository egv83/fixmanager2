import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Badge} from "primereact/badge";
import {Avatar} from "primereact/avatar";

const Header = ({user, onMenuToggle, sidebarCollapsed}) => {

    const navigate = useNavigate();

    const getRoleColor = (rol) => {
        switch (rol?.toLowerCase()) {
            case 'admin':
                return '#6366F1';
            case 'tecnico':
                return '#10B981';
            case 'secretaria':
                return '#8B5CF6';
            default:
                return '#6B7280';
        }
    };

    console.log('Header SIDE BAR COLLAPSED:', sidebarCollapsed);

    return (<header className="header">
        <div className="header-left">
            <Button
                className="p-button-text p-button-rounded mr-3"
                icon={sidebarCollapsed ? "pi pi-bars" : "pi pi-chevron-left"}
                onClick={onMenuToggle}
                tooltip={sidebarCollapsed ? "Mostrar Menu" : "Ocultar Menu"}
            />

            <div className="breadcrumb">
                <span className="text-500">Dashboard</span>
                <i className="pi pi-chevron-right mx-2 text-300"/>
                <span className="font-medium">
                    {user?.rol === 'ADMIN' ? 'Administracion' : user?.rol === 'TECNICO' ? 'Tecnico' : 'Secretaria'}
                </span>
            </div>
        </div>

        {/*<div className="header-center">*/}
        {/*    <i className="pi pi-search mr-3"/>*/}
        {/*    <span className="p-input-icon-left">*/}
        {/*        <InputText className="w-20rem" placeholder="Buscar"/>*/}
        {/*    </span>*/}
        {/*</div>*/}

        <div className="header-right">
            <Button icon="pi pi-bell" className="p-button-text p-button-rounded relative"
            onClick={() => navigate('/notifications')}
            >
                <Badge value={5} severity="danger" className="p-absolute top-0 right-0"/>
            </Button>
        </div>

    </header>)
}

export default Header;