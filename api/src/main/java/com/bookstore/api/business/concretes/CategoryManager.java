package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.CategoryService;
import com.bookstore.api.business.dto.categories.CategoryDtoForPost;
import com.bookstore.api.core.exceptions.BookNotFoundException;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.CategoryRepository;
import com.bookstore.api.entities.abstracts.Category;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryManager implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Override
    public ApiResponse<List<Category>> getAllCategories() {
        List<Category> list = categoryRepository.findAll();
        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<Category> getOneCategories(int id) {
        Category category = this.categoryRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        return ApiResponse.default_OK(category);
    }

    @Override
    public ApiResponse<Category> createOneCategory(CategoryDtoForPost id) {
        Category category = this.modelMapper.map(id, Category.class);
        category = this.categoryRepository.save(category);
        return ApiResponse.default_CREATED(category);
    }

    @Override
    public ApiResponse<Category> updateOneCategory(int id, CategoryDtoForPost request) {
        Category category = getOneCategories(id).getData();
        category = this.modelMapper.map(request, Category.class);
        category.setId(id);
        categoryRepository.save(category);
        return ApiResponse.default_ACCEPTED(category);
    }

    @Override
    public ApiResponse<Category> deleteOneCategory(int id) {
        Category category = getOneCategories(id).getData();
        categoryRepository.deleteById(id);
        return ApiResponse.default_GONE(category);
    }
}

