package com.ochobits.fixmanager.authentication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/v1")
public class AuthenticationController {

    @GetMapping("/test")
    public String testRest(){
        return "TEST DESDE FIXMANAGER DOCKER 2";
    }

}
