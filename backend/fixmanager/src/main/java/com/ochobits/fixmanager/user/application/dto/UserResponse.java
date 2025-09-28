package com.ochobits.fixmanager.user.application.dto;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.Set;

@Builder
public record UserResponse(

        Long id,
        String userName,
//        String password,
        String fullName,
//        Set<String> roles,
        String role,
        String enable,
        LocalDateTime createdAt
) {
}
