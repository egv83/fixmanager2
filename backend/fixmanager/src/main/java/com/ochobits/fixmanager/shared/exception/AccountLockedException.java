package com.ochobits.fixmanager.shared.exception;

public class AccountLockedException extends RuntimeException {

    public AccountLockedException() {
        super("Cuenta bloqueada");
    }

    public AccountLockedException(String message) {
        super(message);
    }
}
