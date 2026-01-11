package com.ochobits.fixmanager.authentication.domain.exceptions;

public class AccountExpiredException extends RuntimeException {

    public AccountExpiredException() {
        super("Cuenta expirada");
    }

    public AccountExpiredException(String message) {
        super(message);
    }
}
