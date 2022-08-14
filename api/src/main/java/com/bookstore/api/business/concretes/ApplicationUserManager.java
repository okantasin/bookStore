package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.ApplicationUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApplicationUserManager implements UserDetailsService {
    private final ApplicationUserService applicationUserDao;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return applicationUserDao
                .selectApplicationUserByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
