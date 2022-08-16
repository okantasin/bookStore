package com.bookstore.api.business.dto.refreshs;

import lombok.Data;

@Data
public class RefreshDto {
    private int userId;
    private String refreshToken;
}
