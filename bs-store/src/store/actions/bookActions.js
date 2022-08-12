import BookService from "../../services/BookService"
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const GET_ONE_BOOK = 'GET_ONE_BOOK';
export const DELETE_ONE_BOOK = 'DELETE_ONE_BOOK';
export const POST_ONE_BOOK = 'POST_ONE_BOOK';
export const PUT_ONE_BOOK = 'PUT_ONE_BOOK';

const bookService = new BookService();

export function getAllBooks() {
    return function (dispatch) {
        bookService.getAllBooks()
            .then(books => books.data)
            .then(books => dispatch({ type: GET_ALL_BOOKS, payload: books }))
    }
}

export function getOneBook(id) {
    return function (dispatch) {
        bookService.getOneBook(id)
            .then(book => book.data)
            .then(book => dispatch({ type: GET_ONE_BOOK, payload: book }))
    }
}

export function postOneBook(book) {
    return function (dispatch) {
        bookService.postOneBook(book)
            .then(book => book.data)
            .then(book => dispatch({ type: POST_ONE_BOOK, payload: book }))
    }
}

export function putOneBook(id, book) {

    return function (dispatch) {
        bookService.putOneBook(id, book)
            .then(book => book.data)
            .then(book => dispatch({ type: PUT_ONE_BOOK, payload: book }))
    }
}

export function deleteBook(id) {

    return function (dispatch) {
        bookService.deleteBook(id)
            .then(book => book.data)
            .then(book => dispatch({ type: DELETE_ONE_BOOK, payload: book }))
    }
}