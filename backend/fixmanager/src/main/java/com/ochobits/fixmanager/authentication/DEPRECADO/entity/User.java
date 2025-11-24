package com.ochobits.fixmanager.authentication.DEPRECADO.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * $table.getTableComment()
 */
@Entity
@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@Table(name = "users")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    public User(String userName, String password, String fullName, String rol){
        this.userName = userName;
        this.password = password;
        this.fullName = fullName;
        this.rol = rol;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "rol", nullable = false)
    private String rol;

    //@Column(name = "is_actived")
    //private Boolean actived;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;

}
