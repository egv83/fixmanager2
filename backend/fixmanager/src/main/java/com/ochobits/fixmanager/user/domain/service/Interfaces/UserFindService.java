package com.ochobits.fixmanager.user.domain.service.Interfaces;

import com.ochobits.fixmanager.user.domain.model.User;

import java.util.Collection;

public interface UserFindService {

    Collection<User> findUserByUserName(String userName);

}
