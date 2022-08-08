package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
