package com.ochobits.fixmanager.user.application.controller;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.PasswordUpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserCreateService;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserFindService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserCreateService userCreateService;
    private final UserFindService userFindService;

    public UserController(UserCreateService userCreateService, UserFindService userFindService) {
        this.userCreateService = userCreateService;
        this.userFindService = userFindService;
    }

    @PostMapping
    public ResponseEntity<UserResponse> createUser(@RequestBody CreateUserRequest request){
        return  new ResponseEntity<>(userCreateService.createUser(request), HttpStatus.CREATED);
    }

    @PatchMapping
//    public ResponseEntity<UserResponse>updateUser(@PathVariable(name = "user") String user, @RequestBody UpdateRequest request){
    public ResponseEntity<UserResponse>updateUser(@RequestBody UpdateRequest request){
        return new ResponseEntity<>(userCreateService.updateUser(request),HttpStatus.CREATED);
    }

    @PatchMapping("/change-password")
    public ResponseEntity<Void>updatePassword(@RequestBody PasswordUpdateRequest request){
        userCreateService.passwordUpdate(request);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>>getUser(){
        return new ResponseEntity<>(userFindService.findAllUser(), HttpStatus.OK);
    }

}
