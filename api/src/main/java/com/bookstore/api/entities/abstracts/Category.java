package com.bookstore.api.entities.abstracts;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue
    @Column(name = "category_id")
    private int categoryId;
    @Column(name = "category_name")
    private String categoryName;
    @Column(name = "category_description")
    private String categoryDescription;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Book> books;

}
