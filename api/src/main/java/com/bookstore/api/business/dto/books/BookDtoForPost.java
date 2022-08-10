package com.bookstore.api.business.dto.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDtoForPost {
    private String title;
    private double unitPrice;
    private String publisher;


}
