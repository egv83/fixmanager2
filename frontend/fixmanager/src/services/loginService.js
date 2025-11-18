import apiConfig from "./apiConfig.js";
import * as CONSTANT from "../config/constants.js"

export const LoginService = {

    async login(loginData){
        try{

            const response = await apiConfig.post(CONSTANT.ENDPOINTS.LOGIN_PATH, loginData);
            const data = response.data;

            return {
                success:true,
                user:data.user || data
            }

        }catch (error){
            return {
                success:false,
                error:error.response?.data?.message || "Error al iniciar sesion"
            }
        }
    }

}