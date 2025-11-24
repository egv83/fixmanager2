package com.ochobits.fixmanager.authentication.infrastructure.interfaces;

import com.ochobits.fixmanager.user.domain.model.User;

public interface TokenGenerator {

    String generator(User user);

}
