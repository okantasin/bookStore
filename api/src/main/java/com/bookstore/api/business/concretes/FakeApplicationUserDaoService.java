package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.ApplicationUserDao;
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
public class FakeApplicationUserDaoService implements ApplicationUserDao {
    private final PasswordEncoder passwordEncoder;

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {

        return getApplicationUsers().stream()
                .filter(applicationUser -> username.equals(applicationUser.getUsername()))
                .findFirst();
    }

        private List<ApplicationUser> getApplicationUsers() {

        List<ApplicationUser> applicationUsers = Lists.newArrayList(

                new ApplicationUser("editor",
                        passwordEncoder.encode("editor123"),
                        EDITOR.getGrantedAuthorities(),
                        true,
                        true,
                        true,
                        true),
                new ApplicationUser("admin",
                        passwordEncoder.encode("admin123456"),
                        ADMIN.getGrantedAuthorities(),
                        true,
                        true,
                        true,
                        true),
                new ApplicationUser("user",
                        passwordEncoder.encode("user123"),
                        USER.getGrantedAuthorities(),
                        true,
                        true,
                        true,
                        true)
        );
            return applicationUsers;
        }

    }


