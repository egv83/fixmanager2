package com.ochobits.fixmanager.authentication.domain.exceptions;

public class CredentialsExpiredException extends RuntimeException {
    public CredentialsExpiredException(String message) {
        super(message);
    }
}
