package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String username);
}

