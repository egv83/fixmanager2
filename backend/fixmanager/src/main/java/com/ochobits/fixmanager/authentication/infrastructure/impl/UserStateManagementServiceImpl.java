package com.ochobits.fixmanager.authentication.infrastructure.impl;

import com.ochobits.fixmanager.authentication.domain.interfaces.UserStateManagementService;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.infrastructure.interfaces.UserJpaRepository;
import com.ochobits.fixmanager.user.infrastructure.mapper.UserMapper;
import com.ochobits.fixmanager.user.infrastructure.persistence.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class UserStateManagementServiceImpl implements UserStateManagementService {

    private final UserJpaRepository userJpaRepository;
    private final UserMapper userMapper;

    public UserStateManagementServiceImpl(UserJpaRepository userJpaRepository, UserMapper userMapper) {
        this.userJpaRepository = userJpaRepository;
        this.userMapper = userMapper;
    }

    /*
    * INCREMENTA EL CONTADOR DE INTENTOS FALLIDOS PARA BLOQUEAR LA CUENTA
    **/
    @Override
    public User handleFailedLogin(User user, int maxAttempts) {

        UserEntity existUser = userJpaRepository.findByUserName(user.getUserName()).get();

        int newAtempt = user.getFailedAttemptCount() + 1;

        existUser.setFailedAttempt(newAtempt);

        if (newAtempt >= maxAttempts) {
            existUser.setIsAccountNonLocked(false);
        }

        return userMapper.toModel(userJpaRepository.save(existUser));
        
    }

}
