package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.AuthorService;
import com.bookstore.api.business.abstracts.BookService;
import com.bookstore.api.business.abstracts.CategoryService;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.core.exceptions.BookNotFoundException;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.BookRepository;
import com.bookstore.api.entities.abstracts.Author;
import com.bookstore.api.entities.abstracts.Book;
import com.bookstore.api.entities.abstracts.Category;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class BookManager implements BookService {

    private final BookRepository bookRepository;
    private final ModelMapper modelMapper;
    private final AuthorService authorService;
    private final CategoryService categoryService;


    @Override
    public ApiResponse<List<Book>> getAllBooks() {
        List<Book> list = bookRepository.findAll();
        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<Book> getOneBook(int bookId) {
        Book book = this.bookRepository.findById(bookId).orElseThrow(() -> new BookNotFoundException(bookId));
        return ApiResponse.default_OK(book);
    }

    @Override
    public ApiResponse<Book> createBook(BookDtoForPost request) {
        Category category = categoryService.getOneCategories(request.getCategoryId()).getData();
        Set<Author> authors = authorService.getAuthorsById(request.getAuthorIds());
        Book book = this.modelMapper.map(request, Book.class);
        book.setBookAuthors(authors);
        book.setCategory(category);
        book = this.bookRepository.save(book);
        return ApiResponse.default_CREATED(book);
    }

    @Override
    public ApiResponse<Book> updateBook(int bookId, BookDtoForPut request) {
        Category category = categoryService.getOneCategories(request.getCategoryId()).getData();
        Set<Author> authors= authorService.getAuthorsById(request.getAuthorIds());
        Book book = getOneBook(bookId).getData();
        book = this.modelMapper.map(request, Book.class);
        book.setBookId(bookId);
        book.setBookAuthors(authors);
        book.setCategory(category);
        bookRepository.save(book);
        return ApiResponse.default_ACCEPTED(book);
    }
    @Override
    public ApiResponse<Book> deleteBook(int bookId) {
        Book book = getOneBook(bookId).getData();
        bookRepository.deleteById(bookId);
        return ApiResponse.default_GONE(book);
    }


}
