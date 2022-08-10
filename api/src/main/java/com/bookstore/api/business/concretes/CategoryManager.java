package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.CategoryService;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.categories.CategoryDtoForPost;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Book;
import com.bookstore.api.entities.abstracts.Category;

import java.util.List;

public class CategoryManager implements CategoryService {


    @Override
    public ApiResponse<List<Book>> getAllCategories() {
        return null;
    }

    @Override
    public ApiResponse<Category> getOneCategories(int categoryId) {
        return null;
    }

    @Override
    public ApiResponse<Category> createOneCategory(CategoryDtoForPost request) {
        return null;
    }

    @Override
    public ApiResponse<Category> updateOneCategory(int categoryId, CategoryDtoForPost request) {
        return null;
    }

    @Override
    public ApiResponse<Category> deleteOneCategory(int categoryId) {
        return null;
    }
}
