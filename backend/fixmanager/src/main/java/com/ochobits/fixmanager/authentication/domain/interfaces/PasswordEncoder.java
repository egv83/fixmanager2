package com.ochobits.fixmanager.authentication.domain.interfaces;

public interface PasswordEncoder {

    String encode(String password);

    boolean matches(String requestPassword, String bddPassword);

}
