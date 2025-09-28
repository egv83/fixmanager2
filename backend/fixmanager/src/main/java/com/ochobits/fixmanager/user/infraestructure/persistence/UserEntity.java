package com.ochobits.fixmanager.user.infraestructure.persistence;

import com.ochobits.fixmanager.user.domain.enums.RoleEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * $table.getTableComment()
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "users")
public class UserEntity implements Serializable {

    private static final long serialVersionUID = 1L;

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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleEnum rol;

    @Column(name = "is_actived")
    private Boolean isEnabled;

    @Column(name = "is_account_non_locked")
    private Boolean isAccountNonLocked;

    @Column(name = "is_account_non_expired")
    private Boolean isAccountNonExpired;

    @Column(name = "is_credentials_non_expired")
    private Boolean isCredentialsNonExpired;

    @Column(name = "fecha_creacion")
    private LocalDateTime createdAt;

    public UserEntity(){}

    public UserEntity(String userName, String password, String fullName, RoleEnum rol, Boolean isEnabled, Boolean isAccountNonLocked, Boolean isAccountNonExpired, Boolean isCredentialsNonExpired, LocalDateTime createdAt){
        this.userName = userName;
        this.password = password;
        this.fullName = fullName;
        this.rol = rol;
        this.isEnabled = isEnabled;
        this.isAccountNonLocked = isAccountNonLocked;
        this.isAccountNonExpired = isAccountNonExpired;
        this.isCredentialsNonExpired = isCredentialsNonExpired;
        this.createdAt = createdAt;
    }

    @PrePersist
    private void asigCreateDate(){
        this.setCreatedAt(LocalDateTime.now());
    }

}
