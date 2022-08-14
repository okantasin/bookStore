package com.bookstore.api.business.abstracts;

import com.bookstore.api.core.security.ApplicationUser;

import java.util.Optional;

public interface ApplicationUserService {
    Optional<ApplicationUser> selectApplicationUserByUsername(String username);
}
