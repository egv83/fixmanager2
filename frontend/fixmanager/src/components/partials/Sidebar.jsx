import React from 'react';
import {useNavigate} from "react-router-dom";
import {PanelMenu} from "primereact/panelmenu";


const Sidebar = ({user, active}) => {

    const navigate = useNavigate();

    /* ITEMS DEL MENÚ POR ROL*/
     const getMenuItems = () => {
        const commonItems = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                color: 'text-blue-500',
                path: '/dashboard',
            },
            {
                label: 'Notificaciones',
                icon: 'pi pi-bell',
                color: 'text-orange-500',
                path: '/notifications',
                badge: '3',
                // command: () => navigate('/notifications')
            }
        ];

        const roleSpecificItems = {
            admin: [
                {
                    label: 'Administración',
                    icon: 'pi pi-cog',
                    items: [
                        {label: 'Usuarios', icon: 'pi pi-user-edit', color: 'text-purple-500' ,path:'/admin/users'},
                        {label: 'Roles', icon: 'pi pi-id-card', command: () => navigate('/admin/roles')},
                        {label: 'Configuración', icon: 'pi pi-sliders-h', command: () => navigate('/admin/config')}
                    ]
                },
                {
                    label: 'Reportes',
                    icon: 'pi pi-chart-bar',
                    items: [
                        {label: 'Ventas', icon: 'pi pi-chart-line', command: () => navigate('/reports/sales')},
                        {label: 'Tickets', icon: 'pi pi-ticket', command: () => navigate('/reports/tickets')}, /* pi-chart-pie*/
                        {label: 'Usuarios', icon: 'pi pi-users', command: () => navigate('/reports/users')} /* pi-chart-bar */
                    ]
                },
                {
                    label: 'Sistema',
                    icon: 'pi pi-server',
                    command: () => navigate('/admin/sistema')
                }
            ],
            tecnico: [
                {
                    label: 'Tickets',
                    icon: 'pi pi-ticket',
                    items: [
                        { label: 'Mis Tickets', icon: 'pi pi-list', command: () => navigate('/tecnico/tickets') },
                        { label: 'Nuevo Ticket', icon: 'pi pi-plus', command: () => navigate('/tecnico/tickets/nuevo') },
                        { label: 'Historial', icon: 'pi pi-history', command: () => navigate('/tecnico/historial') }
                    ]
                },
                {
                    label: 'Herramientas',
                    icon: 'pi pi-wrench',
                    items: [
                        { label: 'Inventario', icon: 'pi pi-box', command: () => navigate('/tecnico/herramientas') },
                        { label: 'Solicitar', icon: 'pi pi-shopping-cart', command: () => navigate('/tecnico/solicitar') }
                    ]
                },
                {
                    label: 'Horario',
                    icon: 'pi pi-calendar',
                    command: () => navigate('/tecnico/horario')
                }
            ],
            secretaria: [
                {
                    label: 'Clientes',
                    icon: 'pi pi-users',
                    items: [
                        { label: 'Lista de Clientes', icon: 'pi pi-list', command: () => navigate('/secretaria/clientes') },
                        { label: 'Nuevo Cliente', icon: 'pi pi-user-plus', command: () => navigate('/secretaria/clientes/nuevo') },
                        { label: 'Comunicaciones', icon: 'pi pi-comments', command: () => navigate('/secretaria/comunicaciones') }
                    ]
                },
                {
                    label: 'Citas',
                    icon: 'pi pi-calendar',
                    items: [
                        { label: 'Calendario', icon: 'pi pi-calendar-plus', command: () => navigate('/secretaria/calendario') },
                        { label: 'Agendar Cita', icon: 'pi pi-plus-circle', command: () => navigate('/secretaria/citas/nueva') }
                    ]
                },
                {
                    label: 'Facturación',
                    icon: 'pi pi-dollar',
                    command: () => navigate('/secretaria/facturacion')
                }
            ]


        };

        const role = user?.rol.toLowerCase();
        const specificItems = roleSpecificItems[role] || [];

        return [...commonItems, ...specificItems];

     };

    // if (!active) return null;

    return (
        <aside className={`sidebar ${!active ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="flex align-items-center">
                    <i className="pi pi-cog text-2xl mr-2"/>
                    <span className="font-bold">FixManager</span>
                </div>
            </div>

            {/* DATOS DEL USUARIO */}
            <div className={"user-info p-3"}>
                <div className="flex align-items-center">
                    <i className="pi pi-user mr-2"/>
                    <div>
                        <div className="font-bold">{user?.fullName}</div>
                        <small className="text-500">{user?.rol}</small>
                    </div>
                </div>

            </div>

            <div className="sidebar-menu">
                <PanelMenu model={getMenuItems()}  className="w-full md:max-w-20rem"
                           style={{}}
                />
            </div>
        </aside>
    )
}

export default Sidebar;