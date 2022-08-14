package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}
