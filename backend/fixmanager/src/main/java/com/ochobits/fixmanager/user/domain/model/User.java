package com.ochobits.fixmanager.user.domain.model;

import com.ochobits.fixmanager.user.domain.enums.AccountStateEnum;
import com.ochobits.fixmanager.user.domain.enums.RoleEnum;

import java.time.LocalDateTime;
import java.util.Set;

public class User {
    private final Long id;
    private final String userName;
    private final String password;
    private final String fullName;
//    private final Set<RoleEnum> roles;
    private final RoleEnum role;
    private final AccountStateEnum accountState;
    private final Boolean isAccountNonLocked;
    private final Boolean isAccountNonExpired;
    private final Boolean isCredentialsNonExpired;
    private final LocalDateTime createdAt;

    private User(UserBuilder builder) {
        this.id = builder.id;
        this.userName = builder.userName;
        this.password = builder.password;
        this.fullName = builder.fullName;
        //this.roles = builder.roles;
        this.role = builder.role;
        this.accountState = builder.accountState;
        this.isAccountNonLocked = builder.isAccountNonLocked;
        this.isAccountNonExpired = builder.isAccountNonExpired;
        this.isCredentialsNonExpired = builder.isCredentialsNonExpired;
        this.createdAt = builder.createdAt;
    }

    public static class UserBuilder {
        private Long id;
        private String userName;
        private String password;
        private String fullName;
//        private Set<RoleEnum> roles;
        private RoleEnum role;
        private AccountStateEnum accountState;
        private Boolean isAccountNonLocked;
        private Boolean isAccountNonExpired;
        private Boolean isCredentialsNonExpired;
        private LocalDateTime createdAt;

        public UserBuilder(User user){
            this.id = user.getId();
            this.userName = user.getUserName();
            this.password = user.getPassword();
            this.fullName = user.getFullName();
//            this.roles = user.getRoles();
            this.role = user.getRole();
            this.accountState = user.getAccountState();
            this.isAccountNonLocked = user.getIsAccountNonLocked();
            this.isAccountNonExpired = user.getIsAccountNonExpired();
            this.isCredentialsNonExpired = user.getIsCredentialsNonExpired();
            this.createdAt = user.getCreatedAt();
        }

        public UserBuilder(){}

        public UserBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public UserBuilder userName(String userName) {
            this.userName = userName;
            return this;
        }

        public UserBuilder password(String password) {
            this.password = password;
            return this;
        }

        public UserBuilder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

//        public UserBuilder roles(Set<RoleEnum> roles) {
//            this.roles = roles;
//            return this;
//        }

        public UserBuilder role(RoleEnum role) {
            this.role = role;
            return this;
        }

        public UserBuilder accountState(AccountStateEnum accountStateEnum) {
            this.accountState = accountStateEnum;
            return this;
        }

        public UserBuilder isAccountNonLocked(boolean isAccountNonLocked) {
            this.isAccountNonLocked = isAccountNonLocked;
            return this;
        }

        public UserBuilder isAccountNonExpired(boolean isAccountNonExpired) {
            this.isAccountNonExpired = isAccountNonExpired;
            return this;
        }

        public UserBuilder isCredentialsNonExpired(boolean isCredentialsNonExpired) {
            this.isCredentialsNonExpired = isCredentialsNonExpired;
            return this;
        }

        public UserBuilder createdAt(LocalDateTime createdAt){
            this.createdAt = createdAt;
            return this;
        }

        public User build() {
            return new User(this);
        }

    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getFullName() {
        return fullName;
    }

//    public Set<RoleEnum> getRoles() {
//        return roles;
//    }

    public RoleEnum getRole() {
        return role;
    }

    public AccountStateEnum getAccountState() {
        return accountState;
    }

    public Boolean getIsAccountNonLocked() {
        return isAccountNonLocked;
    }

    public Boolean getIsAccountNonExpired() {
        return isAccountNonExpired;
    }

    public Boolean getIsCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public static UserBuilder builder(){
        return new UserBuilder();
    }

    public UserBuilder toBuilder(){
        return  new UserBuilder(this);
    }
}
