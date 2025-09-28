package com.ochobits.fixmanager.user.domain.deprecades;

@Deprecated
public class Permission {

    private String permissionName;

    public Permission(String permissionName) {
        this.permissionName = permissionName;
    }

    public String getPermissionName() {
        return permissionName;
    }

}
