package com.bookstore.api.core.exceptions;

public class UserNotFoundException extends  NotFoundException{

    public UserNotFoundException(int id) {
        super(String.format("User with id %d not found", id));
    }

}
