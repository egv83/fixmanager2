import React, {createContext, useContext, useEffect, useState} from "react";
import {USER_KEY, TOKEN_KEY} from "../config/constants.js";
import axios from "axios";
import apiConfig from "../services/apiConfig.js";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("AUTHPROVIDER: ENTRO A EFFECT");
        console.log("USER: "+user);
        console.log("TOKEN: "+token);
        console.log("CONST_USER: "+USER_KEY);
        console.log("TOKEN_KEY: "+TOKEN_KEY);

        const savedUser = localStorage.getItem(USER_KEY);
        const savedToken = localStorage.getItem(TOKEN_KEY);

        console.log('savedUser:', savedUser);
        console.log('savedToken:', savedToken);

        if (savedUser && savedToken) {
            try{
                const parsedUser = JSON.parse(savedUser);
                console.log("PARSED USER: "+parsedUser);
                setUser(parsedUser);
                setToken(savedToken);

                //IMPORTANTE CONFIGURAR AXIOS CON EL TOKEN
                apiConfig.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
                console.log("AXIOS CONFIGURADO CON TOKEN");
                console.log("API CONFIG: "+apiConfig.defaults.headers.common['Authorization']);
            }catch (err){
                console.error("Error parseando usuario: ", err);
                localStorage.removeItem(USER_KEY);
                localStorage.removeItem(TOKEN_KEY);
            }

            // setUser(JSON.parse(savedUser));
            // setToken(savedToken);
        }else{
            console.log("No hay usuario/token guardado");
        }
        setLoading(false);
    }, []);

    const login = (userData, authToken) => {
        console.log('Login llamado con:', { userData, authToken });

        setUser(userData);
        setToken(authToken);

        //Guardar en localStorage
        localStorage.setItem(USER_KEY, JSON.stringify(userData));
        localStorage.setItem(TOKEN_KEY, authToken);

        // Configurar axios para futuras peticiones
        apiConfig.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

        console.log('Datos guardados en localStorage y estado actualizado');
        console.log('localStorage USER_KEY:', localStorage.getItem(USER_KEY));
        console.log('localStorage TOKEN_KEY:', localStorage.getItem(TOKEN_KEY));
    };

    const logout = () => {
        console.log('Logout llamado');
        setUser(null);
        setToken(null);
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        delete axios.defaults.headers.common['Authorization'];
    };

    const isAuthenticated = () => {
        const hasToken = !!token || !!localStorage.getItem(TOKEN_KEY);
        const hasUser = !!user || !!localStorage.getItem(USER_KEY);

        console.log("AUTH PROVIDER: isAuthenticated: ", {hasToken, hasUser});

        return hasToken && hasUser;
    };

    const value = {
        user,
        token,
        login,
        logout,
        loading,
        isAuthenticated
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

};