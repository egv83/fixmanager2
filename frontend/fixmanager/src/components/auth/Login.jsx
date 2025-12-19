import {useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Message} from "primereact/message";
import {Toast} from "primereact/toast";
import {useAuth} from '../../context/AuthContext.jsx';
import {LoginService} from "../../services/LoginService.js";


const API_URL = 'http://localhost:8080/api';

const Login = () => {

    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {login, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const toastCenter = useRef(null);

    const showMessage = (severity, sumary, detail) => {
        toastCenter.current.show({
            severity: severity,
            summary: sumary,
            detail: detail,
            life: 3000
        });
    };

    const handleImputCahnges = (field, value) => {
        console.log('Input cambiado:', field, value);
        setLoginData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }))
        if (error) setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit iniciado');
        setError('');
        setLoading(true);

        console.log("Datos de login:", loginData);

        if (!loginData.userName || !loginData.password) {
            setError('Todos los campos son obligatorios');
            showMessage('error', 'Error', error);
            setLoading(false);
            return;
        }

        try {
            console.log('Llamando a LoginService...');
            const result = await LoginService.login(loginData);
            console.log('Resultado del login:', result);

            if (result.success) {
                console.log('Login exitoso, llamando a authContext.login');
                console.log('User:', result.user);
                console.log('Token:', result.token);

                login(result.user, result.token);

                showMessage('success', 'Exito', 'Login exitoso', 'Bienvenido ' + result.user.fullName + '');

                console.log('Redirigiendo a /dashboard en 1 segundo');
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1000);
            } else {
                console.log('Login fallido:', result.error);
                setError(result.error);
                showMessage('error', 'Error', result.error);
            }

        } catch (e) {
            console.error('Error en handleSubmit:', e)
            setError('Error al conectar con el servidor')
            showMessage('error', 'Error', error);
        } finally {
            setLoading(false)
            console.log('Submit finalizado');
        }

    }

    // IMPORTANTE: isAuthenticated es una función, llámala con ()
    useEffect(() => {
        console.log('Login component mounted');
        console.log('isAuthenticated:', isAuthenticated());

        if (isAuthenticated()) {
            console.log('Ya autenticado, redirigiendo a dashboard');
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate])


    return (
        <div className="login-container">
            <Toast ref={toastCenter} position="center"/>
            <div className="login-wrapper">
                <Card className="login-card shadow-4"
                      header={
                          <div className="text-center p-4 surface-0">
                              <i className="pi pi-cog text-6xl text-primary" style={{fontSize: '4rem'}}/>
                              <h1 className="text-2xl font-bold mt-3 text-900"/>
                          </div>
                      }
                >
                    <form onSubmit={handleSubmit} className="login-form p-fluid">
                        {/*{error && (*/}
                        {/*    <Message*/}
                        {/*        severity="error"*/}
                        {/*        text={error}*/}
                        {/*        className="w-full mb-3"*/}
                        {/*    />*/}
                        {/*)}*/}


                        {/*userName*/}
                        <div className="field mb-4">
                            <label htmlFor="username" className="block text-900 font-medium mb-2">Usuario</label>
                            <InputText
                                id="usename" value={loginData.userName}
                                onChange={(e) => handleImputCahnges('userName', e.target.value)}
                                className="w-full"
                                size="large"
                                placeholder="Ingrese su usuario"
                                required
                            />
                        </div>

                        {/*password*/}
                        <div className="field mb-4">
                            <label htmlFor="password" className="block text-900 font-medium mb-2">
                                Contraseña
                            </label>
                            <Password
                                id="password"
                                value={loginData.password}
                                onChange={(e) => handleImputCahnges('password', e.target.value)}
                                className="w-full"
                                inputClassName="w-full"
                                feedback={false}
                                placeholder="Ingrese su contraseña"
                                toggleMask
                                size="large"
                                required
                            />
                        </div>

                        {/*BOTON*/}
                        <Button
                            label={loading ? "Iniciando sesion..." : "Iniciar sesion"}
                            variant="primary"
                            type="submit"
                            icon={loading ? "pi pi-sign pi-spinner" : 'pi pi-sign-in'}
                            className="w-full mb-4"
                            size="large"
                            disabled={loading}
                        />

                    </form>
                </Card>
            </div>
        </div>
    )


}

export default Login