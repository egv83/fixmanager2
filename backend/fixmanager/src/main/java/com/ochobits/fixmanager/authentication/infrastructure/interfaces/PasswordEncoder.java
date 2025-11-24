package com.ochobits.fixmanager.authentication.infrastructure.interfaces;

public interface PasswordEncoder {

    String encode(String password);

    boolean matches(String requestPassword, String bddPassword);

}
