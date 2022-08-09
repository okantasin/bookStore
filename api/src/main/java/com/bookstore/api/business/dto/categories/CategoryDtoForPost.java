package com.bookstore.api.business.dto.categories;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDtoForPost {
    private String categoryId;
    private String categoryName;
    private String categoryDescription;

}
