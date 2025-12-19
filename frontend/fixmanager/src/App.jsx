// import { useState } from 'react'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/auth/Login.jsx';
import Dashboard from './components/dashboards/Dashboard.jsx';

import {AuthProvider} from "./context/AuthContext.jsx";

// LAYOUTS
import MainLayout from './components/layout/MainLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';

import './styles/theme.css';

function App() {
    //const [count, setCount] = useState(0)

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Rutas publicas*/}
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login/>}/>
                    </Route>

                    {/* Rutas protegidas */}
                    <Route path="/" element={
                        // <ProtectedRoute>
                        <MainLayout/>
                        // </ProtectedRoute>
                    }>
                        <Route index element={<Navigate to="/dashboard" replace/>}/>
                        <Route path="/dashboard" element={null}/> {/* Renderiza por el MainLayout */}

                        {/* Rutas especificas */}
                        <Route path="profile" element={<div>Perfil</div>}/>
                        <Route path="settings" element={<div>Configuración</div>}/>

                        {/* Rutas por rol */}
                        <Route path="admin" element={
                            // <ProtectedRoute requiredRole="ADMIN">
                            <div>Rutas de Admin</div>
                            // </ProtectedRoute>
                        }/>

                        <Route path="tecnico/*" element={
                            // <ProtectedRoute requiredRole="TECNICO">
                            <div>Rutas de Técnico</div>
                            // </ProtectedRoute>
                        }/>

                        <Route path="secretaria/*" element={
                            // <ProtectedRoute requiredRole="SECRETARIA">
                            <div>Rutas de Secretaría</div>
                            // </ProtectedRoute>
                        }/>

                    </Route>

                    {/* 404 */}
                    <Route path="*" element={
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold mb-4">404</h1>
                                <p className="text-gray-600">Página no encontrada</p>
                            </div>
                        </div>
                    }/>

                </Routes>

                {/*<div className="app-container">*/}
                {/*    <Routes>*/}
                {/*        /!*Ruta publica de login *!/*/}
                {/*        <Route path="/login" element={<Login/>}/>*/}

                {/*        /!*Ruta protegida de dashboard*!/*/}
                {/*        <Route path="/dashboard" element={*/}
                {/*            // <ProtectedRoute>*/}
                {/*                <Dashboard/>*/}
                {/*            // </ProtectedRoute>*/}
                {/*        }/>*/}

                {/*        <Route path="/" element={<Navigate to="/login" replace/>}/>*/}
                {/*        /!*<Route path="/CreateUser" element={<CreateUser />} />*!/*/}
                {/*        /!*<Route path="/" element={<Navigate to="/CreateUser" replace />} />*!/*/}
                {/*    </Routes>*/}
                {/*</div>*/}
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
