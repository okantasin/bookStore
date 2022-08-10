package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author,Integer> {
}
