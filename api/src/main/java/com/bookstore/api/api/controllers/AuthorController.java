package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.AuthorService;
import com.bookstore.api.business.dto.authors.AuthorDtoForPost;
import com.bookstore.api.business.dto.authors.AuthorDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Author;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/authors")
public class AuthorController {
    private final AuthorService authorService;

    @GetMapping
    @PreAuthorize("permitAll()")
    public ApiResponse<List<Author>> getAllAuthors() {
        return authorService.getAllAuthors();
    }


    @GetMapping(path="/{id}")
    @PreAuthorize("permitAll()")
    public ApiResponse<Author> getOneAuthor(@PathVariable(name = "id", required = true) int id) {
        return authorService.getOneAuthor(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('author:post')")
    public ResponseEntity<?> createBook(@RequestBody AuthorDtoForPost request) {
        var response = authorService.createAuthor(request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('author:delete')")
    public ResponseEntity<?> deleteAuthor(@PathVariable(name="id") int id) {
        var response = authorService.deleteAuthor(id);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('author:put')")
    public ResponseEntity<?> updateAuthor(@PathVariable(name="id") int id, @RequestBody AuthorDtoForPut request) {
        var response = authorService.updateAuthor(id, request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

}
