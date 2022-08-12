import axios from "axios";

class AuthorService {
    constructor(){
        this.baseUrl=`${process.env.REACT_APP_API_URL}/authors`;
    }
    async getAllAuthors(){
        return await axios.get(this.baseUrl)
        .then(response=>response.data);
    }
    async getAuthorById(id){
        return await axios.get(`${this.baseUrl}/${id}`)
        .then(response=>response.data);
    }
    async addAuthor(author){
        return await axios.post(this.baseUrl,author)
        .then(response=>response.data);
    }
    async updateAuthor(author){
        return await axios.put(`${this.baseUrl}/${author.id}`,author)
        .then(response=>response.data);
    }
    async deleteAuthor(id){
        return await axios.delete(`${this.baseUrl}/${id}`)
        .then(response=>response.data);
    }
}
export default AuthorService;