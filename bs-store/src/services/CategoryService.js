import axios from "axios";
class CategoryService {
    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/categories";
    }
    async getAllCategories() {
        return await axios.get(this.baseUrl)
            .then(response => response.data)
            .catch(err => console.error("GET ERROR", err));
    }
    async getOneCategory(id) {
        let url = `${this.baseUrl}/${id}`;
        return await axios.get(url)
            .then(response => response.data)
            .catch(err => console.error("GET ERROR", err));
    }
    async postOneCategory(category) {
        return await axios.post(this.baseUrl, category)
            .then(response => response.data)
            .catch(err => console.error("POST ERROR", err));
    }
    async putOneCategory(id,category) {
        let url = `${this.baseUrl}/${id}`;
        return await axios.put(url, category)
            .then(response => response.data)
            .catch(err => console.error("PUT ERROR", err));
    }
    async deleteOneCategory(id) {
        return await axios.delete(`${this.baseUrl}/${id}`)
            .then(response => response.data)
            .catch(err => console.error("DELETE ERROR", err));
    }

}
export default CategoryService;