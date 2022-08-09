package com.bookstore.api.business.response.categories;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryGetAllResponses {
    private int categoryId;
    private String categoryName;
    private String categoryDescription;

}
