package com.bookstore.api.dataAccess;

import com.bookstore.api.entities.abstracts.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {


}
