package com.ochobits.fixmanager.authentication.application.dto;

public record LoginResponse(
        Long id,
        String userName,
        String fullName,
        String rol,
        String token,
        String status,
        String message
) {
}
