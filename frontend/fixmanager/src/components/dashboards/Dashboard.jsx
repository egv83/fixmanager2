import {Button} from "primereact/button";
import {useAuth} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {Toast} from "primereact/toast";
import {Menubar} from "primereact/menubar";
import {ConfirmDialog} from "primereact/confirmdialog";
import {Card} from "primereact/card";

// import './css/Dashboard.css';

export const Dashboard = () => {

    const {logout, user, token, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const toast = React.useRef(null);
    // const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        console.log('Dashboard mounted');
        console.log('User:', user);
        console.log('Token:', token);
        console.log('isAuthenticated:', isAuthenticated());

        if (!isAuthenticated()) {
            console.log('No autenticado, redirigiendo a login');
            navigate('/auth/login');
        }
    }, [user, token, isAuthenticated, navigate]);

    const handleLogout = () => {
        console.log('Logout desde dashboard');
        logout();               // llama la logout de AutContext
        navigate('/auth/login')      // Redirige al login
    }

    if (!user) {
        return <div>Cargando dashboard...</div>;
    }

    return (
        <div className="dashboard-container" style={{border: 1,background: "red"}} >
            <Toast ref={toast} /*position="top-right"*/ />
            <ConfirmDialog/>

            {/* MENU SUPERIOR*/}
            {/*<Menubar*/}
            {/*    model={}*/}
            {/*/>*/}


            {/*CONTENIDO PRINCIPAL*/}
            <div className="grid p-fluid" >
                {/*SIDEBAR IZQUIERDO*/}
                <div className="col-12 md:col-3 lg:col-2">
                    <h3>MENU</h3>
                </div>
            </div>

            {/*CONTENIDO CENTRAL*/}
            <div className="col-12 md:col-6 lg:col-7" >
                <h4>CONTENIDO CENTRAL</h4>
                <Card className="mb-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <h2 className="0">Bienvenido {user.fullName}</h2>

                    </div>
                </Card>
            </div>
        </div>

        // <div className="p-4">
        //     <h1>Dashboard</h1>
        //     <div className="p-mt-4">
        //
        //         <h2>Informacion del usuario</h2>
        //         <pre>{JSON.stringify(user, null, 2)}</pre>
        //         <p>TOKEN (primeros 20 chars): {token ? `${token.substring(0,20)}...` : 'no token'}</p>
        //
        //         <div>
        //             <Button
        //                 label='Logout'
        //                 icon='pi pi-sign-out'
        //                 className='p-button-danger mt-4'
        //                 onClick={handleLogout}/>
        //         </div>
        //
        //         <div>
        //             <Button
        //                 label='Ver localStorage'
        //                 icon='pi pi-database'
        //                 className='p-button-secondary ml-2 mt-4'
        //                 onClick={() => {
        //                     console.log('localStorage USER_KEY:', localStorage.getItem('USER_KEY'));
        //                     console.log('localStorage TOKEN_KEY:', localStorage.getItem('TOKEN_KEY'));
        //
        //                     // alert('Usuario: ${localStorage.getItem("user")} Token: ${localStorage.getItem("token")?.substring(0,50)}...');
        //                     alert(`Usuario: ${localStorage.getItem("user")} Token: ${localStorage.getItem("token")?.substring(0,50)}...`);
        //                 }}/>
        //         </div>
        //
        //     </div>
        // </div>
    )
}

export default Dashboard;