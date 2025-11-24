package com.ochobits.fixmanager.shared.exception;

public class CredentialsExpiredException extends RuntimeException {
    public CredentialsExpiredException(String message) {
        super(message);
    }
}
