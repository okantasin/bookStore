package com.bookstore.api.core.exceptions;

public class BookNotFoundException extends NotFoundException {
    public BookNotFoundException(int id) {
        super(String.format("Book with id %d not found", id));
    }
}

