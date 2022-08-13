import axios from "axios";
class BookService{
    constructor(){
        this.baseUrl="http://localhost:8080/api/v1/books";
    
    }

    async getAllBooks(){
        return await axios.get(this.baseUrl)
        .then(response=>response.data)
        .catch(err=>console.error("GET ERROR",err));
    }
    async getOneBook(id){
        let url = `${this.baseUrl}/${id}`;
        return await axios.get(url)
        .then(response=>response.data)
        .catch(err=>console.error("GET ERROR",err));
    }
    async postOneBook(book){
        return await axios.post(this.baseUrl,book)
        .then(response=>response.data)
        .catch(err=>console.error("POST ERROR",err));
    }
    async putOneBook(id,book){
        let url = `${this.baseUrl}/${id}`;
        return await axios.put(url,book)
        .then(response=>response.data)
        .catch(err=>console.error("PUT ERROR",err));
    }
    async deleteOneBook(id){
        let url = `${this.baseUrl}/${id}`;
        return await axios.delete(url)
        .then(response=>response.data)
        .catch(err=>console.error("DELETE ERROR",err));
    }

}
export default BookService;