package com.ochobits.fixmanager.shared.exception;

public class BadCredentialsException extends RuntimeException{

    public BadCredentialsException(){
        super("Credenciales Invalidas");
    }

    public BadCredentialsException(String message){
        super(message);
    }

    public BadCredentialsException(String message, Throwable cause){
        super(message, cause);
    }

}
