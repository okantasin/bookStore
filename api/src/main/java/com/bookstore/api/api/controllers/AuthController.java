package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.UserService;
import com.bookstore.api.business.concretes.RefreshTokenManager;
import com.bookstore.api.business.dto.auths.AuthDto;
import com.bookstore.api.business.dto.refreshs.RefreshDto;
import com.bookstore.api.business.dto.users.UserRequest;
import com.bookstore.api.business.dto.users.UserRequestForRegister;
import com.bookstore.api.core.jwt.JwtTokenProvider;
import com.bookstore.api.entities.abstracts.RefreshToken;
import com.bookstore.api.entities.abstracts.User;
import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = { "http://localhost:3000/", "http://localhost:3001" })
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private UserService userService;
    private RefreshTokenManager refreshTokenService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
                          UserService userService, PasswordEncoder passwordEncoder, RefreshTokenManager refreshTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.refreshTokenService = refreshTokenService;

    }

    @PostMapping("/login")
    public AuthDto login(@RequestBody UserRequest loginRequest) {
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                loginRequest.getUserName(),
                loginRequest.getPassword());

        Authentication auth = authenticationManager.authenticate(authToken);

        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwtToken = jwtTokenProvider.generateJwtToken(auth);

        User user = userService.getOneUserByUserName(loginRequest.getUserName());

        AuthDto authResponse = new AuthDto();
        authResponse.setAccessToken("Bearer " + jwtToken);
        authResponse.setUserName(user.getUserName());
        authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user).getData());
        authResponse.setUserId(user.getId());
        authResponse.setMessage("Successed.");
        authResponse.setFirstName(user.getFirstName());
        authResponse.setLastName(user.getLastName());

        return authResponse;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthDto> register(@RequestBody UserRequestForRegister registerRequest) {

        AuthDto authResponse = new AuthDto();

        // User exists?
        if (userService.getOneUserByUserName(registerRequest.getUserName()) != null) {
            authResponse.setMessage("Username already in use.");
            return new ResponseEntity<>(authResponse, HttpStatus.BAD_REQUEST);
        }

        // User creating...
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setUserName(registerRequest.getUserName());
        user.setPassword(registerRequest.getPassword());

        userService.saveOneUser(user);

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                registerRequest.getUserName(),
                registerRequest.getPassword());

        Authentication auth = authenticationManager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenProvider.generateJwtToken(auth);

        authResponse.setMessage("User successfully registered.");
        authResponse.setAccessToken("Bearer " + jwtToken);
        authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user).getData());
        authResponse.setUserId(user.getId());
        authResponse.setUserName(user.getUserName());
        authResponse.setFirstName(user.getFirstName());
        authResponse.setLastName(user.getLastName());

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestBody RefreshDto refreshRequest) {
        AuthDto authDto = new AuthDto();

        RefreshToken token = refreshTokenService.getByUser(refreshRequest.getUserId()).getData();

        if (token.getToken().equals(refreshRequest.getRefreshToken()) &&
                !refreshTokenService.isRefreshExpired(token).getData()) {

            User user = token.getUser();

            String jwtToken = jwtTokenProvider.generateJwtTokenByUserId(user.getId());

            authDto.setMessage("Token has been refreshed successfully.");
            authDto.setAccessToken("Bearer " + jwtToken);
            authDto.setUserId(user.getId());
            authDto.setFirstName(user.getFirstName());
            authDto.setLastName(user.getLastName());
            authDto.setUserName(user.getUserName());
            authDto.setRefreshToken(token.getToken());

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(authDto);

        } else {
            authDto.setMessage("Refresh token is not valid.");
            return new ResponseEntity<>(authDto, HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        var response = userService.getAllUsers();
        return ResponseEntity.ok(response);
    }

}