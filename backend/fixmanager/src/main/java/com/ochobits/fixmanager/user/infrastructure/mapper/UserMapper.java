package com.ochobits.fixmanager.user.infrastructure.mapper;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.enums.AccountStateEnum;
import com.ochobits.fixmanager.user.domain.enums.RoleEnum;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.infrastructure.interfaces.UserJpaRepository;
import com.ochobits.fixmanager.user.infrastructure.persistence.UserEntity;

import java.util.List;

public interface UserMapper {

    User toModel(CreateUserRequest request);

//    User updateToModel(UpdateRequest request, UserEntity entity);

    User toModel(UserEntity entity);

    UserResponse toResponse(User model);

    UserEntity toEntity(User model);

    RoleEnum stringToRoleEnum(String roleString);

    String rolesToString(RoleEnum roleEnum);

    AccountStateEnum stringToAccountStatusEnum(String accountStatus);
    String accountStatusToString(AccountStateEnum accountStateEnum);

//    Set<RoleEnum> strngToRoleEnum(List<String> roleString);
//
//    Set<String> rolesToString(List<RoleEnum> roleEnums);

    List<UserResponse> toResponseList(List<User> userList);
    List<User> toModelList(List<UserEntity> userEntityList);

}
