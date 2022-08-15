package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.UserService;
import com.bookstore.api.core.security.ApplicationUser;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
@Repository("mysql")
public class UserManager implements UserService {
    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return Optional.empty();
    }
}
