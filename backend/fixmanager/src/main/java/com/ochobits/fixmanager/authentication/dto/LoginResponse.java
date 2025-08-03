package com.ochobits.fixmanager.authentication.dto;

public record LoginResponse(
        Integer id,
        String token,
        String msg
) {
}
