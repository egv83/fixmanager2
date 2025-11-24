package com.ochobits.fixmanager.user.infrastructure.interfaces;

import com.ochobits.fixmanager.user.infrastructure.persistence.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserJpaRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUserName(String userName);
    Optional<UserEntity> findByUserNameAndPassword(String userName,String password);

    Boolean existsByUserName(String userName);

    @Query("SELECT u FROM UserEntity u WHERE u.rol = :role")
    List<UserEntity> findByRole(@Param("role") String role);

    //@Query("SELECT COUNT(u) FROM UserEntity u WHERE u.isEnabled = true")
    //Long countActiveUsers();

    @Query("SELECT COUNT(u) FROM UserEntity u WHERE u.isEnabled = 'ACTIVO'")
    Long countActiveUsers();

}
