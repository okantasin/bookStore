package com.bookstore.api.business.response.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookGetAllResponses {
    private int bookId;
    private String title;
    private String description;
    private int categoryId;
    private int quantity;
    private double price;

}
