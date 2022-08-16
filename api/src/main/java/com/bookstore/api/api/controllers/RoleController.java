package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.RoleService;
import com.bookstore.api.entities.abstracts.Role;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @GetMapping
    public ResponseEntity<?> getAllRoles(){
        var response = roleService.getAllRoles();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
    @PostMapping
    public ResponseEntity<?> createRole(@RequestBody Role role ){
        var response = roleService.postOneRole(role);
        return ResponseEntity
                .status(response.getStatusCode())
                .body(response);
    }
}
