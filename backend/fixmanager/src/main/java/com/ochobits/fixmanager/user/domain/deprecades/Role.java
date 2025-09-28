package com.ochobits.fixmanager.user.domain.deprecades;

import com.ochobits.fixmanager.user.domain.enums.RoleEnum;

import java.util.Set;

@Deprecated
public class Role {

    private RoleEnum rolName;
//    private final Set<Permission> permission;

    public Role(RoleEnum rolName, Set<Permission> permission) {
        this.rolName = rolName;
//        this.permission = permission;
    }

    public RoleEnum getRolName() {
        return rolName;
    }

//    public Set<Permission> getPermission() {
//        return permission;
//    }
}
