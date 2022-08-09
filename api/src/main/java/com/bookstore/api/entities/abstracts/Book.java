package com.bookstore.api.entities.abstracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue
    @Column(name="book_id")
    private int bookId;
    @Column(name="book_name")
    private String bookName;
    @Column(name="unit_price")
    private double unitPrice;
    @Column(name="quantity")
    private int quantity;


}
