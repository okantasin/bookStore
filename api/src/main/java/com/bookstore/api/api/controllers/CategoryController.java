package com.bookstore.api.api.controllers;


import com.bookstore.api.business.abstracts.CategoryService;
import com.bookstore.api.business.dto.categories.CategoryDtoForPost;
import com.bookstore.api.business.dto.categories.CategoryDtoForPut;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @GetMapping(path= "/{id}")
    public ApiResponse<Category> getOneCategories(@PathVariable(name = "id", required = true) int id) {
        return categoryService.getOneCategories(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('category:post')")
    public ResponseEntity<?> createBook(@RequestBody CategoryDtoForPost request) {
        var response = categoryService.createOneCategory(request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('category:delete')")
    public ResponseEntity<?> deleteCategory(@PathVariable(name="id") int id) {
        var response = categoryService.deleteOneCategory(id);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('category:put')")
    public ResponseEntity<?> updateCategory(@PathVariable(name="id") int id, @RequestBody CategoryDtoForPut request) {
        var response = categoryService.updateOneCategory(id, request);
        return new ResponseEntity<>(response, response.getHttpStatus());
    }

}
