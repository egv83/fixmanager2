import {useState} from "react";
import {useNavigate} from "react-router-dom";
// import { useAuth } from '../context/AuthContext'
// import Layout from './Layout'
import {Card} from "primereact/card";
import {InputText} from 'primereact/inputtext'
import {Password} from 'primereact/password'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'
import {Message} from 'primereact/message'
import {ProgressSpinner} from 'primereact/progressspinner'
import {Divider} from 'primereact/divider'
// import { userService } from '../services/userService'


const CreateUser = () => {

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        fullName: '',
        rol: ''
    })

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    // const {user} = useAuth()
    const navigate = useNavigate();

    const roles = [
        {label: 'Administrador', value: 'admin'},
        {label: 'Técnico', value: 'technical'},
        {label: 'Secretaria', value: 'secretary'}
        // { label: 'Usuario', value: 'user' }
    ]

    return (
        // <Layout>
        <div className="p-4">
            <h1>Create User</h1>
            <Card title="Crear Usuario" className="shadow-2"
                  header={
                      <div className="flex align-items-center gap-2">
                          <i className="pi pi-user-plus text-6xl text-primary" style={{fontSize: '4rem'}}/>
                          <span>Crear Usuario</span>
                      </div>
                  }
            >
                <form onSubmit=""  className="p-fluid grid formgrid">
                    {error && <Message severity="error" text={error} className="w-full mb-3"/>} {/*className="col-12 mb-3"*/}
                    {success && <Message severity="success" text={success} className="w-full mb-3"/>} {/*className="col-12 mb-3"*/}

                    {/*Username*/}
                    <div className="field col-12 md:col-6">
                        <label htmlFor="username" className="block text-900 font-medium mb-2">
                            Username
                            <span className="text-900 text-sm">*</span> {/*className="text-red-500"*/}
                        </label>
                        <InputText id="username" value={formData.userName}
                                   onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                   className="w-full"
                                   size="large"
                                   placeholder="Ingrese su usuario"
                                   required
                                   disabled={loading}
                        />
                    </div>

                    {/*Password*/}
                    <div className="field col-12 md:col-6">
                        <label  htmlFor="password" className="block text-900 font-medium mb-2">
                            Contraseña
                            <span className="text-900 text-sm">*</span> {/*className="text-red-500"*/}
                        </label>
                        <Password id="password" value={formData.password}
                                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                                  value={formData.password}
                                  className="w-full"
                                  inputClassName="w-full"
                                  placeholder="Ingrese la contraseña"
                                  toggleMask
                                  size="large"
                                  feedback
                                  required
                                  disabled={loading} />
                    </div>

                    {/*Fullname*/}
                    <div className="field col-12 md:col-6">
                        <label htmlFor="fullName" className="block text-900 font-medium mb-2">
                            Nombre Completo
                            <span className="text-red-500">*</span>
                        </label>
                        <InputText id="fullName" value={formData.fullName}
                                   onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                   className="w-full"
                                   size="large"
                                   placeholder="Ingrese su nombre completo"
                                   disabled={loading}
                        />
                    </div>

                    {/*email*/}
                    <div className="field col-12 md:col-6">
                        <label htmlFor="email" className="block text-900 font-medium mb-2">
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                        <InputText id="email" value={formData.email}
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                                   className="w-full"
                                   size="large"
                                   placeholder="Ingrese su email"
                                   disabled={loading}
                        />
                    </div>

                    {/*Role*/}
                    <div className="field col-12 md:col-6">
                        <label htmlFor="role" className="block text-900 font-medium mb-2">
                            Rol <span className="text-red-500">*</span>
                        </label>
                        <Dropdown id="role" value={formData.rol}
                                  options={roles}
                                  onChange={(e) => setFormData({...formData, rol: e.value})}
                                  placeholder="Seleccione su rol"
                                  className="w-full"
                                  size="large"
                                  required
                                  disabled={loading}
                        />
                    </div>

                    <Divider className="col-12" />

                    {/* Botones */}
                    <div className="field col-12 flex gap-3 justify-content-end">
                        <Button
                            type="button"
                            label="Cancelar"
                            icon="pi pi-times"
                            className="p-button-secondary"
                            onClick={() => navigate('/dashboard')}
                            disabled={loading}
                        />
                        <Button
                            type="submit"
                            label={loading ? "Creando..." : "Crear Usuario"}
                            icon={loading ? "pi pi-spin pi-spinner" : "pi pi-check"}
                            // disabled={loading || !isFormValid}
                        />
                    </div>

                    {loading && (
                        <div className="col-12 flex justify-center">
                            <ProgressSpinner style={{ width: '40px', height: '40px' }} />
                        </div>
                    )}

                </form>

            </Card>
        </div>
        // </Layout>*
    )
}

export default CreateUser