package com.ochobits.fixmanager.user.domain.service.Interfaces;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.model.User;

import java.util.Optional;

public interface UserCreateService {

//    Optional<UserResponse> createUser(CreateUserRequest request);
    UserResponse createUser(CreateUserRequest request);

}
