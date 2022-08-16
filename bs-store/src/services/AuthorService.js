import axios from "axios";
import {authenHeaders} from "./AuthConfig";

class AuthorService {
    constructor(){
        this.baseUrl="http://localhost:8080/api/v1/authors";
    }
    async getAllAuthors(){
        return await axios.get(this.baseUrl)
        .then(response=>response.data).catch(err=>console.error("GET ERROR",err));
    }
    async getOneAuthor(id){
        let url = `${this.baseUrl}/${id}`;
        return await axios.get(url,authenHeaders)
        .then(response=>response.data).catch(err=>console.error("GET ERROR",err));
    }
   
    async postOneAuthor(author){
        return await axios.post(this.baseUrl,author,authenHeaders)
        .then(response=>response.data).catch(err=>console.error("POST ERROR",err));
    }

    async putOneAuthor(author){
        let url = `${this.baseUrl}/${author.id}`;
        return await axios.put(url,author,authenHeaders)
        .then(response=>response.data).catch(err=>console.error("PUT ERROR",err));
    }
    async deleteOneAuthor(id){
        let url =  `${this.baseUrl}/${id}`;
        return await axios.delete(url,authenHeaders)
        .then(response=>response.data).catch(err=>console.error("DELETE ERROR",err));
    }
}
export default AuthorService;