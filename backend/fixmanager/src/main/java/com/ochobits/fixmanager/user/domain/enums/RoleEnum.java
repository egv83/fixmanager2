package com.ochobits.fixmanager.user.domain.enums;

import java.util.Objects;

public enum RoleEnum {
    ADMIN,
    TECNICO,
    SECRETARIA

//    public static RoleEnum fromString(String role){
//        if(Objects.isNull(role)){
//            return null;
//        }
//
//        try {
//            return RoleEnum.valueOf(role.toUpperCase().trim());
//        }catch (IllegalArgumentException e){
//            throw new IllegalStateException(e);
//        }
//    }
}
