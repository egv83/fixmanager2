package com.ochobits.fixmanager.authentication.application.dto;

public record LoginResponse(
        Integer id,
        String token,
        String msg
) {
}
