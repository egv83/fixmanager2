package com.ochobits.fixmanager.user.domain.service;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.enums.AccountStateEnum;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserCreateService;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserFindService;
import com.ochobits.fixmanager.user.infraestructure.interfaces.UserJpaRepository;
import com.ochobits.fixmanager.user.infraestructure.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserCreateService, UserFindService {

    private final UserJpaRepository userJpaRepository;
//    private final UserEntityMapper userEntityMapper;
    private final UserMapper userMapper;

    public UserService(UserJpaRepository userJpaRepository, UserMapper userMapper) {
        this.userJpaRepository = userJpaRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserResponse createUser(CreateUserRequest request) {
        if(userJpaRepository.existsByUserName(request.userName())){
            throw new RuntimeException("Usuario ya existe");
        }

        User userTmp = userMapper.toModel(request);
        User.UserBuilder user = userTmp.toBuilder()
                .accountState(AccountStateEnum.ACTIVO)
                .isAccountNonExpired(true)
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build().toBuilder();

        User userSaved = userMapper.toModel(userJpaRepository.save(userMapper.toEntity(user.build())));

        return userMapper.toResponse(userSaved);
    }

    @Override
    public Collection<User> findUserByUserName(String userName) {
        return List.of();
    }
}
