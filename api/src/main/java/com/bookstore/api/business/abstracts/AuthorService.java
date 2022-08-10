package com.bookstore.api.business.abstracts;

import com.bookstore.api.business.dto.authors.AuthorDtoForPost;
import com.bookstore.api.business.dto.authors.AuthorDtoForPut;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Author;

import java.util.List;

public interface AuthorService {
    ApiResponse<List<Author>> getAllAuthors();

    ApiResponse<Author> getOneAuthor(int authorId);

    ApiResponse<Author> createAuthor(AuthorDtoForPost request);

    ApiResponse<Author> updateAuthor(int authorId, AuthorDtoForPut request);

    ApiResponse<Author> deleteAuthor(int authorId);
}
