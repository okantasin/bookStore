import axios from "axios";

class AuthorService {
    constructor(){
        this.baseUrl="http://localhost:8080/api/v1/authors";
    }
    async getAllAuthors(){
        return await axios.get(this.baseUrl)
        .then(response=>response.data).catch(err=>console.error("GET ERROR",err));
    }
    async getAuthorById(id){
        return await axios.get(`${this.baseUrl}/${id}`)
        .then(response=>response.data).catch(err=>console.error("GET ERROR",err));
    }
    async addAuthor(author){
        return await axios.post(this.baseUrl,author)
        .then(response=>response.data).catch(err=>console.error("POST ERROR",err));
    }
    async updateAuthor(author){
        return await axios.put(`${this.baseUrl}/${author.id}`,author)
        .then(response=>response.data).catch(err=>console.error("PUT ERROR",err));
    }
    async deleteAuthor(id){
        return await axios.delete(`${this.baseUrl}/${id}`)
        .then(response=>response.data).catch(err=>console.error("DELETE ERROR",err));
    }
}
export default AuthorService;