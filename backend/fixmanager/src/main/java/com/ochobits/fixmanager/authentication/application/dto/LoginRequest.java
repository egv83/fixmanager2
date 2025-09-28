package com.ochobits.fixmanager.authentication.application.dto;

public record LoginRequest(
        String user,
        String password
) {
}
