package com.bookstore.api.business.dto.authors;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthorDtoForPost {
    private String authorName;
    private String authorSurname;
    private String email;
    private String authorDescription;
}
