package com.bookstore.api.business.dto.users;

import com.bookstore.api.entities.abstracts.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserDto {
    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private Set<Role> roles;
}
