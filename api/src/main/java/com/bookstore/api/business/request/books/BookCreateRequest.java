package com.bookstore.api.business.request.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookCreateRequest {
    private String title;
    private String description;
    private int categoryId;
    private int quantity;
    private double price;

}
