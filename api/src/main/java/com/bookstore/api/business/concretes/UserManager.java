package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.UserService;
import com.bookstore.api.core.security.ApplicationUser;

import java.util.Optional;

public class UserManager implements UserService {
    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return Optional.empty();
    }
}
