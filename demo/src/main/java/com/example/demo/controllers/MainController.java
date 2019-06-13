package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class MainController {

    @RequestMapping("/")
    public String home() {
        return "Hello, World!";
    }
}
//because of restcontroller annotation spring renders resulting string directly back to the caller. in this case caller is home method and string is returned
