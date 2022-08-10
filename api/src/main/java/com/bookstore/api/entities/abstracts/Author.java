package com.bookstore.api.entities.abstracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "authors")
public class Author {
    @Id
    @GeneratedValue
    @Column(name = "author_id")
    private int authorId;
    @Column(name = "author_name")
    private String authorName;
    @Column(name = "author_surname")
    private String authorSurname;
    @Column(name = "email")
    private String email;
    @Column(name = "author_description")
    private String authorDescription;

}
