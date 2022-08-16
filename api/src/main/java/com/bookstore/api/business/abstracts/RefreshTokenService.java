package com.bookstore.api.business.abstracts;

import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.RefreshToken;
import com.bookstore.api.entities.abstracts.User;

public interface RefreshTokenService {
    ApiResponse<String> createRefreshToken(User user);

    ApiResponse<Boolean> isRefreshExpired(RefreshToken token);

    ApiResponse<RefreshToken> getByUser(int userId);
}
