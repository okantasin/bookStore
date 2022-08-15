package com.bookstore.api.business.abstracts;

import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Book;

import java.util.List;

public interface BookService {
    ApiResponse<List<Book>> getAllBooks();

    ApiResponse<Book> getOneBook(int id);

    ApiResponse<Book> createBook(BookDtoForPost request);

    ApiResponse<Book> updateBook(int id, BookDtoForPut request);

    ApiResponse<Book> deleteBook(int id);

}

