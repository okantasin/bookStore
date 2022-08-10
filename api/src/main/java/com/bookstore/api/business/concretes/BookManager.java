package com.bookstore.api.business.concretes;

import com.bookstore.api.business.abstracts.BookService;
import com.bookstore.api.business.dto.books.BookDtoForPost;
import com.bookstore.api.business.dto.books.BookDtoForPut;
import com.bookstore.api.core.exceptions.BookNotFoundException;
import com.bookstore.api.core.models.ApiResponse;
import com.bookstore.api.dataAccess.BookRepository;
import com.bookstore.api.entities.abstracts.Book;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookManager implements BookService {

    private final BookRepository bookRepository;
    private final ModelMapper modelMapper;

    //********************************GET ALL**************************************************

    @Override
    public ApiResponse<List<Book>> getAllBooks() {
        List<Book> list = bookRepository.findAll();
        return ApiResponse.default_OK(list);
    }
    //********************************GET ONE**************************************************

    @Override
    public ApiResponse<Book> getOneBook(int bookId) {
        Book book = this.bookRepository.findById(bookId).orElseThrow(() -> new BookNotFoundException(bookId));
        return ApiResponse.default_OK(book);
    }
    //******************************* CREATE ***************************************************
    @Override
    public ApiResponse<Book> createBook(BookDtoForPost request) {
      Book book = this.modelMapper.map(request, Book.class);
      book = this.bookRepository.save(book);
      return ApiResponse.default_CREATED(book);
    }
    //******************************* UPDATE ***************************************************

    @Override
    public ApiResponse<Book> updateBook(int bookId, BookDtoForPut request) {
        Book book =getOneBook(bookId).getData();
        book = this.modelMapper.map(request, Book.class);
        book.setBookId(bookId);
        bookRepository.save(book);
        return ApiResponse.default_ACCEPTED(book);
    }
    //********************************* DELETE *****************************************************

    @Override
    public ApiResponse<Book> deleteBook(int bookId) {
        Book book = getOneBook(bookId).getData();
        bookRepository.deleteById(bookId);
        return ApiResponse.default_GONE(book);
    }


}
