package com.bookstore.api.business.abstracts;

import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.categories.CategoryDtoForPost;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.entities.abstracts.Book;
import com.bookstore.api.entities.abstracts.Category;

import java.util.List;

public interface CategoryService {
    ApiResponse<List<Book>> getAllCategories();

    ApiResponse<Category> getOneCategories(int categoryId);

    ApiResponse<Category> createOneCategory(CategoryDtoForPost request);

    ApiResponse<Category> updateOneCategory(int categoryId, CategoryDtoForPost request);

    ApiResponse<Category> deleteOneCategory(int categoryId);

}
