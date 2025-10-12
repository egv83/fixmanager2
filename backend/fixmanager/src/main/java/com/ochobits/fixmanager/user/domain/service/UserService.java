package com.ochobits.fixmanager.user.domain.service;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.PasswordUpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.enums.AccountStateEnum;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserCreateService;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserFindService;
import com.ochobits.fixmanager.user.infraestructure.interfaces.UserJpaRepository;
import com.ochobits.fixmanager.user.infraestructure.mapper.UserMapper;
import com.ochobits.fixmanager.user.infraestructure.persistence.UserEntity;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Service
public class UserService implements UserCreateService, UserFindService {

    private final UserJpaRepository userJpaRepository;
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
    public UserResponse updateUser(UpdateRequest request) {
        UserEntity existUser = userJpaRepository.findByUserName(request.userName()).get();

        if(Objects.isNull(existUser)){
            throw new RuntimeException("El usuario a actualizar no existe");
        }

        if(Objects.nonNull(request.userNameNew()) && !request.userNameNew().isBlank()){
//            throw new RuntimeException("Ingrese un usuario a actualizar");
            existUser.setUserName(request.userNameNew());
        }

        if(Objects.nonNull(request.fullName()) && !request.fullName().isBlank()){
            existUser.setFullName(request.fullName());
        }

        if(Objects.nonNull(request.rol()) && !request.rol().isBlank()){
            existUser.setRol(userMapper.stringToRoleEnum(request.rol()));
        }

        User updatedUser = userMapper.toModel(userJpaRepository.save(existUser));

        return userMapper.toResponse(updatedUser);
    }

    @Override
    public void passwordUpdate(PasswordUpdateRequest request) {
        UserEntity existUser = userJpaRepository.findByUserNameAndPassword(request.userName(), request.password())
                .orElseThrow(()-> new RuntimeException("El usuario o clave a actualizar no existe"));
        

        if(Objects.isNull(request.newPassword()) || request.newPassword().isBlank()){
            throw new RuntimeException("La nueva clave no puede estar en blanco");
        }

        if(Objects.isNull(request.repeatNewPassword()) || request.repeatNewPassword().isBlank()){
            throw new RuntimeException("La repetición de la nueva clave no puede estar en blanco");
        }

        if(!request.newPassword().equals(request.repeatNewPassword())){
            throw new RuntimeException("La nueva contraceña no coincide con la repetición");
        }

        existUser.setPassword(request.newPassword());

        userJpaRepository.save(existUser);

    }

    @Override
    public Collection<User> findUserByUserName(String userName) {
        return List.of();
    }
}
