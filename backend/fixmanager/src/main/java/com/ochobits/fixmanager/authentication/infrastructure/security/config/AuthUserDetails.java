package com.ochobits.fixmanager.authentication.infrastructure.security.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class AuthUserDetails implements UserDetails {

    private String userName;
    private String password;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    // (Opcional) Métodos booleanos de UserDetails que suelen ser true por defecto
//    @Override public boolean isAccountNonExpired() { return true; }
//    @Override public boolean isAccountNonLocked() { return true; }
//    @Override public boolean isCredentialsNonExpired() { return true; }
//    @Override public boolean isEnabled() { return true; }

    private AuthUserDetails(AuthUserDetailsBuilder builder) {
        this.userName = builder.userName;
        this.password = builder.password;
    }

    public static class AuthUserDetailsBuilder {

        private String userName;
        private String password;

        public AuthUserDetailsBuilder(){}

        public AuthUserDetailsBuilder(AuthUserDetails userDetails){
            this.userName = userDetails.getUsername();
            this.password = userDetails.getPassword();
        }

        public AuthUserDetailsBuilder userName(String userName){
            this.userName = userName;
            return this;
        }

        public AuthUserDetailsBuilder password(String password){
            this.password = password;
            return this;
        }

        public AuthUserDetails build(){
            return new AuthUserDetails(this);
        }

    }

    public static AuthUserDetailsBuilder builder(){
        return new AuthUserDetailsBuilder();
    }

    public AuthUserDetailsBuilder toBuild(){
        return new AuthUserDetailsBuilder(this);
    }
}
