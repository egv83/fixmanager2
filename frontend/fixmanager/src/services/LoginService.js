import apiConfig from "./apiConfig.js";
import * as CONSTANT from "../config/constants.js"

export const LoginService = {

    async login(loginData){
        try{

            console.log('LoginService.login llamado con:', loginData);
            console.log('Endpoint:', CONSTANT.ENDPOINTS.LOGIN_PATH);

            const response = await apiConfig.post(CONSTANT.ENDPOINTS.LOGIN_PATH, loginData);
            const data = response.data;

            console.log('Respuesta del servidor:', data);

            //GUARDAR TOKEN EN LOCAL STORAGE
            if(!data.token){
                console.error('No se recibió token');
                return {
                    success:false,
                    error:"No se recibió token del servidor"
                }
            }

            //GUARDAR USER DATA EN LOCALSTORAGE
            const userData = {
                id: data.id,
                userName: data.username,
                rol: data.rol? data.rol.toLowerCase(): '',
                fullName: data.fullName
            }

            console.log('UserData preparado:', userData);

            return {
                success:true,
                user:userData,
                token:data.token
            }

        }catch (error){

            console.error("Error completo en login:", error);
            console.error("Error response:", error.response);
            console.error("Error message:", error.message);

            return {
                success:false,
                error: error.response?.data?.message ||
                    error.response?.data?.error ||
                    error.message ||
                    "Error al iniciar sesion"
            }
        }
    }

}