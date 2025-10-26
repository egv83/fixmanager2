import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import {Message} from "primereact/message";
import {Divider} from "primereact/divider";
//IMPORT AXIOS
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(null);
    const [error, setError] = useState(null);
    // const {login} = useAuth()
    const navigate = useNavigate();

    const roles = [
        {label: 'Administrador', value: 'admin'},
        {label: 'Técnico', value: 'tecnico'},
        {label: 'Secretaria', value: 'secretaria'}
    ]

    const demoUsers = [
        {username: 'admin', password: 'admin123', role: 'admin', label: 'Admin: admin / admin123'},
        {username: 'tech', password: 'tech123', role: 'tecnico', label: 'Técnico: tech / tech123'},
        {username: 'secretary', password: 'secret123', role: 'secretaria', label: 'Secretaria: secretary / secret123'}
        //{username: 'user', password: 'user123', role: 'user', label: 'Usuario: user / user123'}
    ]

    const handlelogin = (e) => {
        e.preventDefault()
        setError('')

        const users = {
            admin: {username: 'admin', password: 'admin123', role: 'admin', name: 'Administrador del Sistema'},
            tech: {username: 'tech', password: 'tech123', role: 'technical', name: 'Usuario Técnico'},
            secretary: {username: 'secretary', password: 'secret123', role: 'secretaria', name: 'Secretaria'}
            //user: {username: 'user', password: 'user123', role: 'user', name: 'Usuario Regular'}
        }

        // const userKey = Object.keys(users).find(key =>
        //     users[key].username === username && users[key].password === password
        // );

        // if(userKey && users[userKey].role === role) {
        //     login(users[userKey])
        //     navigate('/dashboard')
        // }else {
        //     setError('Credenciales invalidas o rol incorrecto')
        // }

    }

    const fillDemoCredentials = (demoUser) => {
        setUsername(demoUser.username)
        setPassword(demoUser.password)
        setRole(demoUser.role)
    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <Card className="login-card shadow-4"
                      header={
                          <div className="text-center p-4 surface-0">
                              <i className="pi pi-cog text-6xl text-primary" style={{fontSize: '4rem'}}/>
                              <h1 className="text-2xl font-bold mt-3 text-900"/>
                          </div>
                      }
                >
                    <form onSubmit={handlelogin} className="login-form p-fluid">
                        {error && <Message severity="error" text={error} className="w-full mb-3"/>}

                        <div className="field mb-4">
                            <label htmlFor="username" className="block text-900 font-medium mb-2">Usuario</label>
                            <InputText id="usename" value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       className="w-full"
                                       size="large"
                                       placeholder="Ingrese su usuario"
                                       required
                            />
                        </div>

                        <div className="field mb-4">
                            <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                            <Password
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                                inputClassName="w-full"
                                feedback={false}
                                placeholder="Ingrese su contraseña"
                                toggleMask
                                size="large"
                                required
                            />
                        </div>

                        <div className="field mb-4">
                            <label htmlFor="role" className="block text-900 font-medium mb-2">Role</label>
                            <Dropdown
                                id="role"
                                value={role}
                                options={roles}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="Ingrese su role"
                                className="w-full"
                                size="large"
                                required
                            />
                        </div>

                        <Button label="Iniciar sesion" variant="primary" type="submit"
                                icon="pi pi-sign-in"
                                className="w-full mb-4"
                                size="large"
                                onClick={()=>{
                                    console.log("User: "+username + " ROL: "+role);
                                }}
                        />

                        <Divider align="center">
                            <span className="text-600 text-sm">Usuarios Demo</span>
                        </Divider>

                        <div className="demo-users grid">
                            {demoUsers.map((demoUser, index) => (
                                <div key={index} className="col-12 md:col-6">
                                    <Button label={demoUser.label}
                                            className="w-full p-button-outlined p-button-secondary mb-2 text-sm"
                                            onClick={() => fillDemoCredentials(demoUser)}
                                            size="small"
                                    />
                                </div>
                            ))}
                        </div>

                    </form>
                </Card>
            </div>
        </div>
    )


}

export default Login