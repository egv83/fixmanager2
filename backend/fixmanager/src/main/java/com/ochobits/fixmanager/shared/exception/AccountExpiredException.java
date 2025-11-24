package com.ochobits.fixmanager.shared.exception;

public class AccountExpiredException extends RuntimeException {

    public AccountExpiredException() {
        super("Cuenta expirada");
    }

    public AccountExpiredException(String message) {
        super(message);
    }
}
