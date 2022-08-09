package com.bookstore.api.business.request.categories;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategorCreateRequest {
    private String categoryName;
    private String categoryDescription;

}
