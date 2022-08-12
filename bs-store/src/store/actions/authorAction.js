import AuthorService from '../../services/AuthorService'
export const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS';
export const GET_ONE_AUTHOR = 'GET_ONE_AUTHOR';
export const DELETE_ONE_AUTHOR = 'DELETE_ONE_AUTHOR';
export const POST_ONE_AUTHOR = 'POST_ONE_AUTHOR';
export const PUT_ONE_AUTHOR = 'PUT_ONE_AUTHOR';

const authorService = new AuthorService();

export function getAllAuthors() {
    return function(dispatch){
        authorService.getAllAuthors()
        .then(authors=>authors.data)
        .then(authors=>dispatch({type:GET_ALL_AUTHORS, payload:authors}))
    }
}

export function getOneAuthor(id) {
    return function(dispatch){
        authorService.getOneAuthor(id)
        .then(author=>author.data)
        .then(author=>dispatch({type:GET_ONE_AUTHOR, payload:author}))
    }
}

export function postOneAuthor(author) {
    return function(dispatch){
        authorService.postOneAuthor(author)
        .then(author=>author.data)
        .then(author=>dispatch({type:POST_ONE_AUTHOR, payload:author}))
    }
}
export function deleteOneAuthor(id) {
    return function(dispatch){
        authorService.deleteOneAuthor(id)
        .then(author=>author.data)
        .then(author=>dispatch({type:DELETE_ONE_AUTHOR, payload:author}))
    }
}

export function putOneAuthor(id, author) {
    return function(dispatch){
        authorService.putOneAuthor(id, author)
        .then(author=>author.data)
        .then(author=>dispatch({type:PUT_ONE_AUTHOR, payload:author}))
    }
}
