package com.ochobits.fixmanager.authentication.domain.exceptions;

public class AccountLockedException extends RuntimeException {

    public AccountLockedException() {
        super("Cuenta bloqueada");
    }

    public AccountLockedException(String message) {
        super(message);
    }
}
