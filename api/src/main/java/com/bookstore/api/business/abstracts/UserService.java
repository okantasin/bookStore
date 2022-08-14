package com.bookstore.api.business.abstracts;

import com.bookstore.api.core.security.ApplicationUser;
import com.bookstore.api.dataAccess.UserRepository;

import java.util.Optional;

public interface UserService extends ApplicationUserDao {
    Optional<ApplicationUser> selectApplicationUserByUsername(String username);
}

