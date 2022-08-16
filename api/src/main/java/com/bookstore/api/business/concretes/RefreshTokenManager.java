package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.RefreshTokenService;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.RefreshTokenRepository;
import com.bookstore.api.entities.abstracts.RefreshToken;
import com.bookstore.api.entities.abstracts.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

@Service
public class RefreshTokenManager implements RefreshTokenService {

    @Value("${application.jwt.refresh.token.expires.in}")
    Long expireSeconds;

    private RefreshTokenRepository refreshTokenRepository;

    public RefreshTokenManager(RefreshTokenRepository refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public ApiResponse<String> createRefreshToken(User user) {
        RefreshToken token = refreshTokenRepository.findByUserId(user.getId());
        if (token == null) {
            token = new RefreshToken();
            token.setUser(user);
        }
        token.setToken(UUID.randomUUID().toString());
        token.setExpiryDate(Date.from(Instant.now().plusSeconds(expireSeconds)));
        refreshTokenRepository.save(token);
        return ApiResponse.default_OK(token.getToken());
    }

    public ApiResponse<Boolean> isRefreshExpired(RefreshToken token) {
        Boolean isExpired = token.getExpiryDate().before(new Date());
        return ApiResponse.default_OK(isExpired);
    }

    public ApiResponse<RefreshToken> getByUser(int userId) {
        return ApiResponse.default_OK(refreshTokenRepository.findByUserId(userId));
    }
}
