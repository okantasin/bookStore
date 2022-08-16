package com.bookstore.api.business.abstracts;

import com.bookstore.api.business.dto.users.UserDto;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.User;

import java.util.List;

public interface UserService extends ApplicationUserDao {

    ApiResponse<List<UserDto>> getAllUsers();

    ApiResponse<UserDto> getOneUser(int id);

    ApiResponse<UserDto> postOneUser(User user);

    ApiResponse<UserDto> putOneUser(int id, User user);

    User getOneUserByUserName(String username);

    void deleteOneUser(int id);

    User saveOneUser(User user);
}

