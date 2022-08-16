package com.bookstore.api.business.abstracts;

import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Role;

import java.util.List;

public interface RoleService {
    ApiResponse<List<Role>> getAllRoles();
    ApiResponse<Role> postOneRole(Role role);
}
