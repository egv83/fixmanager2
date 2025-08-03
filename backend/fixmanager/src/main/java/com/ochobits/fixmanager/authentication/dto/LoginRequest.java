package com.ochobits.fixmanager.authentication.dto;

public record LoginRequest(
        String user,
        String password
) {
}
