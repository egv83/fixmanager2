package com.ochobits.fixmanager.authentication.application.dto;


import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UsersDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Long id;

    private String userName;

    private String password;

    private String fullName;

    private String rol;

    private Boolean actived;

    private Date fechaCreacion;

}
