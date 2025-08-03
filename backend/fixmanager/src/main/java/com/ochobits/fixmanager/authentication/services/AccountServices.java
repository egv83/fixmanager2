package com.ochobits.fixmanager.authentication.services;

import com.ochobits.fixmanager.authentication.entity.User;
import com.ochobits.fixmanager.authentication.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AccountServices {

    private final UserRepository userRepository;

    public AccountServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Long create(User user){
        user.setActived(true);
        user.setFechaCreacion(LocalDateTime.now());
        return userRepository.save(user).getId();
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

}
