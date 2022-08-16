package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.RoleService;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.RoleRepository;
import com.bookstore.api.entities.abstracts.Role;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoleManager implements RoleService {
    private final RoleRepository roleRepository;

    public RoleManager(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public ApiResponse<List<Role>> getAllRoles() {
        var roles = roleRepository.findAll();

        return ApiResponse.default_OK(roles);
    }

    @Override
    public ApiResponse<Role> postOneRole(Role role) {
        roleRepository.save(role);
        return ApiResponse.default_CREATED(role);
    }
}
