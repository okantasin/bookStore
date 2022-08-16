package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {

    RefreshToken findByUserId(int id);
}

