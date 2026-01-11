package com.ochobits.fixmanager.authentication.domain.exceptions;

public class AccountInactiveException extends RuntimeException {
    public AccountInactiveException() {
        super("Cuenta inactiva");
    }

    public AccountInactiveException(String message) {
        super(message);
    }
}
