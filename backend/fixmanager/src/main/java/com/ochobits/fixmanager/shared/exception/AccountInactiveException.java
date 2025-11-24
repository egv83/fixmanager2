package com.ochobits.fixmanager.shared.exception;

public class AccountInactiveException extends RuntimeException {
    public AccountInactiveException() {
        super("Cuenta inactiva");
    }

    public AccountInactiveException(String message) {
        super(message);
    }
}
