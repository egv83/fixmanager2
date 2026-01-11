package com.ochobits.fixmanager.config;

import com.ochobits.fixmanager.authentication.application.dto.ErrorResponse;
import com.ochobits.fixmanager.authentication.domain.exceptions.*;
import com.ochobits.fixmanager.user.domain.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(UserNotFoundException ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
                ex.getMessage(),
                "USER_NOT_FOUND",
                HttpStatus.NOT_FOUND.value(),
                getPath(request)
        );
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleBadCredentials(BadCredentialsException ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
          ex.getMessage(),
          "UNAUTHORIZED",
                HttpStatus.UNAUTHORIZED.value(),
                request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
    }

    @ExceptionHandler(AccountLockedException.class)
    public ResponseEntity<ErrorResponse> handleAccountLocked(AccountLockedException ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
                ex.getMessage(),
                "LOCKED",
                HttpStatus.LOCKED.value(),
                request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.LOCKED).body(errorResponse);
    }

    @ExceptionHandler(AccountInactiveException.class)
    public ResponseEntity<ErrorResponse> handleAccountInactive(AccountInactiveException ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
          ex.getMessage(),
          "FORBIDDEN",
          HttpStatus.FORBIDDEN.value(),
          request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
    }

    @ExceptionHandler({AccountExpiredException.class, CredentialsExpiredException.class})
    public ResponseEntity<ErrorResponse> handleExpiredExceptions(RuntimeException ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
          ex.getMessage(),
          "FORBIDDEN",
          HttpStatus.FORBIDDEN.value(),
          request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex, WebRequest request){
        ErrorResponse errorResponse = ErrorResponse.create(
          "Error interno del servidor",
          "INTERNAL_SERVER_ERROR",
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }

    private String getPath(WebRequest request){
        return request.getDescription(false).replace("usi=","");
    }

}
