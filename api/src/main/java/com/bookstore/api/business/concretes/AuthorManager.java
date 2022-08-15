package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.AuthorService;
import com.bookstore.api.business.dto.authors.AuthorDtoForPost;
import com.bookstore.api.business.dto.authors.AuthorDtoForPut;
import com.bookstore.api.core.exceptions.BookNotFoundException;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.AuthorRepository;
import com.bookstore.api.entities.abstracts.Author;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthorManager implements AuthorService {
    private final AuthorRepository authorRepository;
    private  final ModelMapper modelMapper;


    @Override
    public ApiResponse<List<Author>> getAllAuthors() {
        List<Author> list = authorRepository.findAll();
        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<Author> getOneAuthor(int id) {
        Author author = this.authorRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        return ApiResponse.default_OK(author);
    }

    @Override
    public ApiResponse<Author> createAuthor(AuthorDtoForPost request) {
        Author author = modelMapper.map(request, Author.class);
        author = this.authorRepository.save(author);
        return ApiResponse.default_CREATED(author);

    }

    @Override
    public ApiResponse<Author> updateAuthor(int id, AuthorDtoForPut request) {
        Author author =getOneAuthor(id).getData();
        author = this.modelMapper.map(request, Author.class);
        author.setId(id);
        authorRepository.save(author);
        return ApiResponse.default_ACCEPTED(author);
    }

    @Override
    public ApiResponse<Author> deleteAuthor(int id) {
        Author author = getOneAuthor(id).getData();
        authorRepository.deleteById(id);
        return ApiResponse.default_GONE(author);
    }

    @Override
    public Set<Author> getAuthorsById(List<Integer> authorsIds) {
        Set<Author> authors = new HashSet<>();
        authorsIds.forEach(id -> authors.add(getOneAuthor(id).getData()));
        return authors;

    }
}
