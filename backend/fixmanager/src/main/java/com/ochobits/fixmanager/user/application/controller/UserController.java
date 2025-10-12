package com.ochobits.fixmanager.user.application.controller;

import com.ochobits.fixmanager.user.application.dto.CreateUserRequest;
import com.ochobits.fixmanager.user.application.dto.PasswordUpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UpdateRequest;
import com.ochobits.fixmanager.user.application.dto.UserResponse;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserCreateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserCreateService userCreateService;

    public UserController(UserCreateService userCreateService) {
        this.userCreateService = userCreateService;
    }

    @PostMapping
    public ResponseEntity<UserResponse> createUser(@RequestBody CreateUserRequest request){
        return  new ResponseEntity<>(userCreateService.createUser(request), HttpStatus.CREATED);
    }

    @PatchMapping
//    public ResponseEntity<UserResponse>updateUser(@PathVariable(name = "user") String user, @RequestBody UpdateRequest request){
    public ResponseEntity<UserResponse>updateUser(@RequestBody UpdateRequest request){
        return new ResponseEntity<>(userCreateService.updateUser(request),HttpStatus.OK);
    }

    @PatchMapping("/change-password")
    public ResponseEntity<Void>updatePassword(@RequestBody PasswordUpdateRequest request){
        userCreateService.passwordUpdate(request);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
