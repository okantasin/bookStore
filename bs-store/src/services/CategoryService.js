import axios from "axios";
class CategoryService {
    constructor() {
        this.baseUrl = `${process.env.REACT_APP_API_URL}/categories`;
    }
    async getAllCategories() {
        return await axios.get(this.baseUrl)
            .then(response => response.data);
    }
    async getCategoryById(id) {
        return await axios.get(`${this.baseUrl}/${id}`)
            .then(response => response.data);
    }
    async addCategory(category) {
        return await axios.post(this.baseUrl, category)
            .then(response => response.data);
    }
    async updateCategory(category) {
        return await axios.put(`${this.baseUrl}/${category.id}`, category)
            .then(response => response.data);
    }
    async deleteCategory(id) {
        return await axios.delete(`${this.baseUrl}/${id}`)
            .then(response => response.data);
    }

}
export default CategoryService();