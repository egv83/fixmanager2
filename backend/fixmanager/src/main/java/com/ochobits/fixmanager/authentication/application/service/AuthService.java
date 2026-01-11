package com.ochobits.fixmanager.authentication.application.service;

import com.ochobits.fixmanager.authentication.application.dto.LoginRequest;
import com.ochobits.fixmanager.authentication.application.dto.LoginResponse;
import com.ochobits.fixmanager.authentication.domain.exceptions.*;
import com.ochobits.fixmanager.authentication.domain.interfaces.PasswordEncoder;
import com.ochobits.fixmanager.authentication.domain.interfaces.TokenGenerator;
import com.ochobits.fixmanager.authentication.domain.interfaces.UserStateManagementService;
import com.ochobits.fixmanager.user.domain.model.User;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserFindService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import static com.ochobits.fixmanager.authentication.domain.constants.AuthenticationConstant.MAX_FAILED_ATTEMPTS;

@Service
public class AuthService {

    private final UserFindService userFindService;
    private final UserStateManagementService userStateManagementService;
    private final PasswordEncoder passwordEncoder;
    private final TokenGenerator tokenGenerator;

    public AuthService(UserFindService userFindService, UserStateManagementService userStateManagementService,
                       PasswordEncoder passwordEncoder, TokenGenerator tokenGenerator)
    {
        this.userFindService = userFindService;
        this.userStateManagementService = userStateManagementService;
        this.passwordEncoder = passwordEncoder;
        this.tokenGenerator = tokenGenerator;
    }

    public LoginResponse authenticate(LoginRequest request) {

//        try{
        User user = userFindService.findUserByUserName(request.userName());

//            // Verificar contraseña
        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            user = userStateManagementService.handleFailedLogin(user, MAX_FAILED_ATTEMPTS);
            throw new BadCredentialsException("Credenciales inválidas numero de intentos: "+user.getFailedAttemptCount()
                    +" de "+MAX_FAILED_ATTEMPTS);
        }

            // Verificar estado de la cuenta
            if (!"ACTIVO".equals(user.getAccountState().name())) {
                throw new AccountInactiveException("Cuenta inactiva");
            }

            if (Boolean.FALSE.equals(user.getIsAccountNonLocked())) {
                throw new AccountLockedException("Cuenta bloqueada");
            }

            if (Boolean.FALSE.equals(user.getIsAccountNonExpired())) {
                throw new AccountExpiredException("Cuenta expirada");
            }

            if (Boolean.FALSE.equals(user.getIsCredentialsNonExpired())) {
                throw new CredentialsExpiredException("Credenciales expiradas");
            }


        /*******************/
        /** GENERAR TOKEN **/
        /*******************/

        var token = tokenGenerator.generator(user);

        return new LoginResponse(
                user.getId(),
                user.getUserName(),
                user.getFullName(),
                user.getRole().name(),
                token,
                HttpStatus.OK.toString(),
                ""
        );

//        }catch (RuntimeException e){
//            throw new RuntimeException("Credenciales invalidas",e);
//        }

    }
}
