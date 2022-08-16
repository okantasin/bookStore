package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface RoleRepository  extends JpaRepository<Role, Integer> {

    Role findByName(String string);

    Set<Role> findByIdIn(Set<Role> roles);
}

