package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.UserService;
import com.bookstore.api.entities.abstracts.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {

    private final UserService userService; // UserServiceImp

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        var response = userService.getAllUsers();
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response);
    }

    @PostMapping
    public ResponseEntity<?> postOneUser(@RequestBody User user) {
        var response = userService.postOneUser(user);
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response);
    }
}
