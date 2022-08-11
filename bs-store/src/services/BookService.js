import axios from "axios";
class BookService{
    constructor(){
        this.baseUrl=`${process.env.REACT_APP_API_URL}/books`;
    }
    async getAllBooks(){
        return await axios.get(this.baseUrl)
        .then(response=>response.data);
    }
    async getBookById(id){
        return await axios.get(`${this.baseUrl}/${id}`)
        .then(response=>response.data);
    }
    async addBook(book){
        return await axios.post(this.baseUrl,book)
        .then(response=>response.data);
    }
    async updateBook(book){
        return await axios.put(`${this.baseUrl}/${book.id}`,book)
        .then(response=>response.data);
    }
    async deleteBook(id){
        return await axios.delete(`${this.baseUrl}/${id}`)
        .then(response=>response.data);
    }

}
export default BookService();