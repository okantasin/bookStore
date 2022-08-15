package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.BookService;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookService bookService;

    @GetMapping
    @PreAuthorize("permitAll()")
    public ApiResponse<List<Book>> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping(path="/{id}")
    @PreAuthorize("permitAll()")
    public ApiResponse<Book> getOneBook(@PathVariable(name = "id", required = true) int bookId) {
        return bookService.getOneBook(bookId);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('book:post')")
    public ResponseEntity<?> createBook(@RequestBody BookDtoForPost request) {
       var response = bookService.createBook(request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('book:delete')")
    public ResponseEntity<?> deleteBook(@PathVariable(name="id") int bookId) {
        var response = bookService.deleteBook(bookId);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('book:put')")
    public ResponseEntity<?> updateBook(@PathVariable(name="id") int bookId, @RequestBody BookDtoForPut request) {
        var response = bookService.updateBook(bookId, request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }


}
