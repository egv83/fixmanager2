package com.ochobits.fixmanager.authentication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;


public record CreateUserDTO(

        @JsonProperty("username")
//        @NotNull
//        @NotBlank
        String userName,

//        @NotNull
//        @NotBlank
        String password,

        @JsonProperty("fullname")
//        @NotNull
//        @NotBlank
        String fullName,

//        @NotNull
//        @NotBlank
        String rol
) {
}
