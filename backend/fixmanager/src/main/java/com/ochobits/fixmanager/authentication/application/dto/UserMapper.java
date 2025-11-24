package com.ochobits.fixmanager.authentication.application.dto;

import com.ochobits.fixmanager.authentication.DEPRECADO.entity.User;

public class UserMapper {

    public static CreateUserDTO toDTO(User entity){
        return new CreateUserDTO(
                entity.getUserName(),
                entity.getPassword(),
                entity.getFullName(),
                entity.getRol()
        );
    }

    public static User toEntity(CreateUserDTO dto){
        return new User(
                dto.userName(),
                dto.password(),
                dto.fullName(),
                dto.rol()
        );
    }
}
