package com.ochobits.fixmanager.authentication.application.dto;

import java.time.LocalDateTime;

public record ErrorResponse(
        String message,
        String error,
        int status,
        LocalDateTime timestamp,
        String path
) {

    public static ErrorResponse create(String message, String error, int status, String path){
        return new ErrorResponse(message,error,status,LocalDateTime.now(), path);
    }

}
