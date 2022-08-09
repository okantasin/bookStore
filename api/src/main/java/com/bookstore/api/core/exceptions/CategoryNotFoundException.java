package com.bookstore.api.core.exceptions;

public class CategoryNotFoundException extends NotFoundException {
    public CategoryNotFoundException(int id) {
        super(String.format("Category with id %d not found", id));
    }
}

