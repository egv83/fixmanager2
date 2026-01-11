import axios from 'axios';
import {API_URL} from "../config/constants";
import {LoginService} from "./LoginService.js";

const apiConfig = axios.create({
        //URL BASE para todas las peticiones
        baseURL: API_URL,

        //Configuración opcional: cabeceras, timeout, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000, //tiempo de espera en milisegundos son 10 segundos

    });

/*INTERCEPTOR PARA MANEJAR ERROR 401 (TOKEN EXPIRADO)*/
// apiConfig.interceptors.response.use(
//
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//
//         /*VALIDA SI EL ERROR ES 401 (UNAUTORIZED) Y NO ES PETICIÓN DE LOGIN*/
//         // if(error.response?.status === 401 && originalRequest.url !== `${API_URL}/auth/v1/login`){
//         if(error.response?.status === 401 && !originalRequest._retry){
//             originalRequest._retry = true;
//
//             try{
//                 LoginService.logout()
//             }catch (e){}
//
//         }
//     }
//
// )

export default apiConfig;

