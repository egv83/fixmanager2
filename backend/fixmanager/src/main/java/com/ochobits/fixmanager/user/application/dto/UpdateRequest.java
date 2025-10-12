package com.ochobits.fixmanager.user.application.dto;

public record UpdateRequest(
        String userName,
        String userNameNew,
        String fullName,
        String rol
) {
}
