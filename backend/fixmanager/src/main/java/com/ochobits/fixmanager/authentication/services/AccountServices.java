package com.ochobits.fixmanager.authentication.services;

import com.ochobits.fixmanager.authentication.entity.User;
import com.ochobits.fixmanager.user.infraestructure.interfaces.UserJpaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

//@Service
//Spublic class AccountServices {

//    private final UserJpaRepository userJpaRepository;

//    public AccountServices(UserJpaRepository userJpaRepository) {
//        this.userJpaRepository = userJpaRepository;
//    }

//    public Long create(User user){
        //user.setActived(true);
//        user.setFechaCreacion(LocalDateTime.now());
//        return userRepository.save(user).getId();
//        return null;
//    }

//    public Optional<User> getUserById(Long id){
//        return userRepository.findById(id);
//        return null;
//    }

//}
