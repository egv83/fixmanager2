package com.ochobits.fixmanager.user.application.dto;

public record PasswordUpdateRequest (
        String userName,
        String password,
        String newPassword,
        String repeatNewPassword
){
}
