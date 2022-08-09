package com.bookstore.api.business.abstracts;

import com.bookstore.api.business.request.books.BookCreateRequest;
import com.bookstore.api.business.request.books.BookDeleteRequest;
import com.bookstore.api.business.request.books.BookUpdateRequest;
import com.bookstore.api.business.response.books.BookGetAllResponses;
import com.bookstore.api.business.response.books.BookGetOneResponse;
import com.bookstore.api.core.models.ApiResponse;

import java.util.List;

public interface BookService {
    ApiResponse<List<BookGetAllResponses>> getAllBooks();
    ApiResponse<BookGetOneResponse> getOneBook(int id);
    ApiResponse<BookCreateRequest> createBook(BookCreateRequest bookCreateRequest);
    ApiResponse<BookUpdateRequest> updateBook(int id, BookCreateRequest bookCreateRequest);
    ApiResponse<BookDeleteRequest> deleteBook(BookDeleteRequest bookDeleteRequest);


}
