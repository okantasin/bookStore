package com.bookstore.api.core.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import static com.bookstore.api.core.security.ApplicationUserRole.*;

@Configuration // This is a configuration class
@EnableWebSecurity
@RequiredArgsConstructor // This is a constructor dependency injection
@EnableGlobalMethodSecurity(prePostEnabled = true) // This is a method dependency injection
public class ApplicationSecurityConfig  extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder  passwordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
         http
                 .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/v1/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
          UserDetails admin = User.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin123456"))
                    .authorities(ADMIN.getGrandtedAuthorities())
                   // .roles(ADMIN.name())
                    .build();
        UserDetails editor = User.builder()
                .username("editor")
                .password(passwordEncoder.encode("editor123456"))
                .authorities(EDITOR.getGrandtedAuthorities())
             //  .roles(EDITOR.name())
                .build();

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("user123456"))
                .authorities(USER.getGrandtedAuthorities())
               // .roles(USER.name())
                .build();

        return new InMemoryUserDetailsManager(admin, editor, user);
    }
}
