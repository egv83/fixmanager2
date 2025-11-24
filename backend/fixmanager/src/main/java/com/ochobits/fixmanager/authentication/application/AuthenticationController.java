package com.ochobits.fixmanager.authentication.application;

import com.ochobits.fixmanager.authentication.application.dto.LoginRequest;
import com.ochobits.fixmanager.authentication.application.dto.LoginResponse;
import com.ochobits.fixmanager.authentication.domain.service.AuthService;
//import com.ochobits.fixmanager.authentication.services.AccountServices;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/v1")
public class AuthenticationController {

//    private final AccountServices accountServices;

    private final AuthService authService;

    public AuthenticationController(AuthService authService) {
        this.authService = authService;
    }

//    @GetMapping("/test")
//    public String testRest(){
//        return "TEST DESDE FIXMANAGER DOCKER 2";
//    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = authService.authenticate(request);
        return ResponseEntity.ok(response);
    }

//    @PostMapping("/register")
//    public Object registerUser(@RequestBody User request){
//        if("".equals(request.getUserName())){
//            return "Ingrese el usuario";
//        }
//        if("".equals(request.getPassword())){
//            return "Ingrese una contraseña";
//        }
//        if("".equals(request.getFullName())){
//            return "Ingrese el nombre";
//        }
//        if("".equals(request.getRol())){
//            return "Ingrese el rol";
//        }

//        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario Creado: "+ accountServices.create(request));
//    }

//    @GetMapping("/user")
//    public ResponseEntity<User> getUser(@RequestParam( name = "id",required = true) Long id){
//        return ResponseEntity.status(HttpStatus.OK).body(accountServices.getUserById(id).get());
//    }

}
