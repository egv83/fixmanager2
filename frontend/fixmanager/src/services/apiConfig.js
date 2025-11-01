import axios from 'axios';
import {API_URL} from "../config/constants";

const apiConfig = axios.create({
        //URL BASE para todas las peticiones
        baseURL: API_URL,

        //Configuración opcional: cabeceras, timeout, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000, //tiempo de espera en milisegundos son 10 segundos

    });

export default apiConfig;

