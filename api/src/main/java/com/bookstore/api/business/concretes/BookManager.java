package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.BookService;
import com.bookstore.api.business.request.books.BookCreateRequest;
import com.bookstore.api.business.request.books.BookDeleteRequest;
import com.bookstore.api.business.request.books.BookUpdateRequest;
import com.bookstore.api.business.response.books.BookGetAllResponses;
import com.bookstore.api.business.response.books.BookGetOneResponse;
import com.bookstore.api.core.models.ApiResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookManager implements BookService {


    @Override
    public ApiResponse<List<BookGetAllResponses>> getAllBooks() {

        return null;
    }

    @Override
    public ApiResponse<BookGetOneResponse> getOneBook(int id) {
        return null;
    }

    @Override
    public ApiResponse<BookCreateRequest> createBook(BookCreateRequest bookCreateRequest) {
        return null;
    }

    @Override
    public ApiResponse<BookUpdateRequest> updateBook(int id, BookCreateRequest bookCreateRequest) {
        return null;
    }

    @Override
    public ApiResponse<BookDeleteRequest> deleteBook(BookDeleteRequest bookDeleteRequest) {
        return null;
    }
}
