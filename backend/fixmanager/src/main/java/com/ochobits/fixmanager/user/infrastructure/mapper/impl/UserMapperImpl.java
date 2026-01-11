package com.ochobits.fixmanager.user.infrastructure.mapper.impl;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.enums.AccountStateEnum;
import com.ochobits.fixmanager.user.domain.enums.RoleEnum;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.infrastructure.mapper.UserMapper;
import com.ochobits.fixmanager.user.infrastructure.persistence.UserEntity;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class UserMapperImpl implements UserMapper {
    @Override
    public User toModel(CreateUserRequest request) {
        if(Objects.isNull(request)){
            return null;
        }

        return User.builder()
                .userName(request.userName())
                .password(request.password())
                .fullName(request.fullName())
//                .roles(strngToRoleEnum(request.rol()))
                .role(stringToRoleEnum(request.rol()))
                .build();
    }

    @Override
    public User toModel(UserEntity entity) {
        return User.builder()
                .id(entity.getId())
                .userName(entity.getUserName())
                .password(entity.getPassword())
                .fullName(entity.getFullName())
//                .roles(strngToRoleEnum(entity.getRol())) // PARA MAPEAR UN LIST DE ROLES
                .role(entity.getRol())
                .accountState(stringToAccountStatusEnum(entity.getIsEnabled()))
                .isAccountNonExpired(entity.getIsAccountNonExpired())
                .isAccountNonLocked(entity.getIsAccountNonLocked())
                .isCredentialsNonExpired(entity.getIsCredentialsNonExpired())
                .createdAt(entity.getCreatedAt())
                .failedAttemptCount(entity.getFailedAttempt())
                .build();
    }

    @Override
    public UserResponse toResponse(User model) {
        if(Objects.isNull(model)){
            return null;
        }

        return UserResponse.builder()
                .id(model.getId())
                .userName(model.getUserName())
                .fullName(model.getFullName())
//                .roles(model.getRoles())      // PARA MAPEAR UN LIST DE ROLES
                .role(rolesToString(model.getRole()))
                .enable(accountStatusToString(model.getAccountState()))
                .createdAt(model.getCreatedAt())
                .build();
    }

    @Override
    public UserEntity toEntity(User model) {
        UserEntity entity = new UserEntity();
        entity.setUserName(model.getUserName());
        entity.setPassword(model.getPassword());
        entity.setFullName(model.getFullName());
        entity.setIsEnabled(model.getAccountState().name());
        entity.setRol(model.getRole());
        entity.setIsAccountNonExpired(model.getIsAccountNonExpired());
        entity.setIsAccountNonLocked(model.getIsAccountNonLocked());
        entity.setIsCredentialsNonExpired(model.getIsCredentialsNonExpired());
        entity.setFailedAttempt(model.getFailedAttemptCount());
        return  entity;
    }

    @Override
    public RoleEnum stringToRoleEnum(String roleString) {
        if (Objects.isNull(roleString) || roleString.isBlank()){
            return null;
        }

        try {
            return RoleEnum.valueOf(roleString.toUpperCase().trim());
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e);
        }

    }

    @Override
    public String rolesToString(RoleEnum roleEnum) {
        if(Objects.isNull(roleEnum)){
            return null;
        }

        try {
            return roleEnum.name();
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e);
        }
    }

    @Override
    public AccountStateEnum stringToAccountStatusEnum(String accountStatus) {
        if(Objects.isNull(accountStatus) || accountStatus.isBlank()){
            return null;
        }

        try{
            return AccountStateEnum.valueOf(accountStatus.toUpperCase().trim());
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e);
        }

    }

    @Override
    public String accountStatusToString(AccountStateEnum accountStateEnum) {
        if(Objects.isNull(accountStateEnum)){
            return null;
        }

        try{
            return accountStateEnum.name();
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e);
        }
    }

//    @Override
//    public Set<RoleEnum> strngToRoleEnum(List<String> roleString) {
//        if(Objects.isNull(roleString) || roleString.isEmpty()){
//            return Set.of();
//        }
//        return roleString.stream()
//                .map(rolStr -> {
//                    try{
//                        return RoleEnum.valueOf(rolStr.toUpperCase().trim());
//                    }catch (IllegalArgumentException e){
//                        throw new IllegalArgumentException(e);
//                    }
//                })
//                .collect(Collectors.toSet());
//    }
//
//    @Override
//    public Set<String> rolesToString(List<RoleEnum> roleEnums) {
//       if(Objects.isNull(roleEnums)){
//           return Set.of();
//       }
//
//        return roleEnums.stream()
//                .map(Enum::name)
//                .collect(Collectors.toSet());
//    }

}
