package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.ApplicationUserService;
import com.bookstore.api.core.security.ApplicationUser;
import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.bookstore.api.core.security.ApplicationUserRole.*;

@Service
@RequiredArgsConstructor
public class FakeApplicationUserManager implements ApplicationUserService {
    private final PasswordEncoder passwordEncoder;

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return  getApplicationUsers().stream()
                .filter(applicationUser -> username.equals(applicationUser.getUsername()))
                .findFirst();
    }
    private List<ApplicationUser> getApplicationUsers(){
        return Lists.newArrayList(
                new ApplicationUser("user",
                        passwordEncoder.encode("user123"),
                        ADMIN.getGrandtedAuthorities(),
                        true,
                        true,
                        true,
                        true),
                new ApplicationUser("admin",
                        passwordEncoder.encode("admin123"),
                        USER.getGrandtedAuthorities(),
                        true,
                        true,
                        true,
                        true),
                new ApplicationUser("editor",
                        passwordEncoder.encode("editor123"),
                        EDITOR.getGrandtedAuthorities(),
                        true,
                        true,
                        true,
                        true)
        );
    }
}

