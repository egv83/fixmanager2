package com.ochobits.fixmanager.user.application.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record CreateUserRequest(
        String userName,
        String password,
        String fullName,
//        List<String> rol
        String rol
) {
}
