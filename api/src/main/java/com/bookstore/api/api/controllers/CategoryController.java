package com.bookstore.api.api.controllers;


import com.bookstore.api.business.abstracts.BookService;
import com.bookstore.api.business.abstracts.CategoryService;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.business.dto.categories.CategoryDtoForPost;
import com.bookstore.api.business.dto.categories.CategoryDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Book;
import com.bookstore.api.entities.abstracts.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/categories")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public ApiResponse<List<Category>> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping(path="/{categoryId}")
    public ApiResponse<Category> getOneCategories(@PathVariable(name = "categoryId", required = true) int categoryId) {
        return categoryService.getOneCategories(categoryId);
    }

    @PostMapping
    public ResponseEntity<?> createBook(@RequestBody CategoryDtoForPost request) {
        var response = categoryService.createOneCategory(request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable(name="id") int categoryId) {
        var response = categoryService.deleteOneCategory(categoryId);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable(name="id") int categoryId, @RequestBody CategoryDtoForPut request) {
        var response = categoryService.updateOneCategory(categoryId, request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

}
