package com.bookstore.api.business.dto.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDtoForPost {
    private int categoryId;
    private String title;
    private double unitPrice;
    private String publisher;
    private List<Integer> authorIds;


}
