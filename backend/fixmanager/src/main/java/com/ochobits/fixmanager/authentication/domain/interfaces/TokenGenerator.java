package com.ochobits.fixmanager.authentication.domain.interfaces;

import com.ochobits.fixmanager.user.domain.model.User;

public interface TokenGenerator {

    String generator(User user);

}
