package com.bookstore.api.business.request.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookUpdateRequest extends BookCreateRequest {
    private int bookId;

}
