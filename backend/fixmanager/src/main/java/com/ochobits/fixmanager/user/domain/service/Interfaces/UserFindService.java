package com.ochobits.fixmanager.user.domain.service.Interfaces;

import com.ochobits.fixmanager.user.domain.model.User;

import java.util.Collection;
import java.util.Optional;

public interface UserFindService {

    Collection<User> findUsersByUserName(String userName);

    User findUserByUserName(String userName);

//    Optional<User> findUserByUserName(String userName);
}
