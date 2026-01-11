import React, {useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {Badge} from "primereact/badge";
import {Avatar} from "primereact/avatar";
import {useAuth} from "../../context/AuthContext.jsx";
import {TieredMenu} from "primereact/tieredmenu";

const Header = ({user, onMenuToggle, sidebarActive}) => {

    const menuLeft = useRef(null);
    const navigate = useNavigate();
    const {logout, isAuthenticated} = useAuth();

    /* PARA LOGOUT */
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [user, isAuthenticated, navigate]);

    const handleLogout = () => {
        console.log('Header LOGOUT:');

        logout();               // llama la logout de AutContext
        navigate('/login')      // Redirige al login
    }

    const getRoleStyle = () => {
        console.log('Header getRoleStyle:'+ user?.rol.toUpperCase());
        const r = user?.rol.toUpperCase();
        switch (r) {
            case 'ADMIN':
                return { backgroundColor: '#fc5e5e', color: '#ffffff' }; // Rojo
            case 'TECNICO':
                return { backgroundColor: '#3b82f6', color: '#ffffff' }; // Azul
            case 'CLIENTE':
                return { backgroundColor: '#22c55e', color: '#ffffff' }; // Verde
            default:
                return { backgroundColor: '#6366f1', color: '#ffffff' }; // Indigo (Primary)
        }
    };

    console.log('Header SIDE BAR COLLAPSED:', sidebarActive);

    const items = [
        {
            label: 'Mi Perfil',
            icon: 'pi pi-user',
            className: 'p-2',
            command: () => navigate('/profile') /*to: '/dashboard'*/
        },
        {
            label: 'Ajustes',
            icon: 'pi pi-cog',
            className: 'p-2',
            command: () => navigate('/settings')
        },
        {separator: true},
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => {
                handleLogout()
            },
            template: (item, options) => {
                return (
                    <div
                        className="flex align-items-center p-2 cursor-pointer hover:surface-hover transition-colors"
                        onClick={(e) => options.onClick(e)}
                    >
                        <i className={`${item.icon} mr-2 font-bold`} style={{fontSize: '1.2rem', color: '#ff0000'}}/>
                        <span className="font-bold" style={{color: '#e55d5d'}}>{item.label}</span>
                    </div>
                )
            }
        }
    ];

    return (
        <header
            className="header"
        >
            {/* LADO IZQUIERDO */}
            <div
                className="header-left"
            >
                {/* El botón que controla el Sidebar */}
                <Button
                    icon={sidebarActive ? "pi pi-chevron-left" : "pi pi-bars"}
                    onClick={onMenuToggle}
                    className="p-button-rounded p-button-text p-button-secondary mr-3"
                />

                <div
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
            >
                {/* NOTIFICACIONES */}
                <Button
                    icon="pi pi-bell"
                    onClick={() => navigate('/notifications')}
                >
                    <Badge value="3" severity="danger"></Badge>
                </Button>

                {/* CONTENEDOR DEL POUP */}
                <TieredMenu className="p-2" model={items} popup ref={menuLeft} id="poup_menu_user"/>

                {/*AREA DE CLICK USER */}
                <div
                    className="user-profile flex align-items-center gap-3 pl-3 border-left-1 surface-border cursor-pointer hover:surface-hover transition-colors transition-duration-150"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        menuLeft.current.toggle(e)
                    }}
                    aria-controls="poup_menu_user"
                    aria-haspopup
                >
                    <div className="flex flex-column text-right hidden sm:flex">
                        <span className="text-color font-bold line-height-1">{user?.fullName}</span>
                        <small className="font-medium uppercase"
                               style={{color: 'rgba(255,255,255,0.51)'}}>{user?.rol}</small>
                    </div>
                    <Avatar
                        label={user?.fullName?.charAt(0).toUpperCase()}
                        shape="circle"
                        size="large"
                        className="font-bold shadow-2"
                        style={getRoleStyle()}
                    />
                    <i className="pi pi-angle-down text-400"></i>
                </div>

            </div>
        </header>

    )
}

export default Header;