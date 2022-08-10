package com.bookstore.api.api.controllers;

import com.bookstore.api.business.abstracts.AuthorService;
import com.bookstore.api.business.dto.authors.AuthorDtoForPost;
import com.bookstore.api.business.dto.authors.AuthorDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Author;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/authors")
public class AuthorController {
    private final AuthorService authorService;




    //********************************GET ALL**************************************************
    @GetMapping
    public ApiResponse<List<Author>> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    //***************************GET ONE******************************************************
    @GetMapping(path="/{authorId}")
    public ApiResponse<Author> getOneAuthor(@PathVariable(name = "authorId", required = true) int authorId) {
        return authorService.getOneAuthor(authorId);
    }

    //******************************* CREATE ***************************************************
    @PostMapping
    public ResponseEntity<?> createBook(@RequestBody AuthorDtoForPost request) {
        var response = authorService.createAuthor(request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }
    //********************************* DELETE *****************************************************

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable(name="id") int authorId) {
        var response = authorService.deleteAuthor(authorId);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }
    //************************************* UPDATE **************************************************

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAuthor(@PathVariable(name="id") int authorId, @RequestBody AuthorDtoForPut request) {
        var response = authorService.updateAuthor(authorId, request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

}
