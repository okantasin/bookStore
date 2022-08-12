import CategoryService from "../../services/CategoryService"

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ONE_CATEGORY = 'GET_ONE_CATEGORY';
export const DELETE_ONE_CATEGORY = 'DELETE_ONE_CATEGORY';
export const POST_ONE_CATEGORY = 'POST_ONE_CATEGORY';
export const PUT_ONE_CATEGORY = 'PUT_ONE_CATEGORY';

const categoryService = new CategoryService();

export function getAllCategories() {
    return function (dispatch) {
        categoryService.getAllCategories()
            .then(categories => categories.data)
            .then(categories => dispatch({ type: GET_ALL_CATEGORIES, payload: categories }))
    }
}

export function getCategoryById(id) {
    return function (dispatch) {
        categoryService.getCategoryById(id)
            .then(category => category.data)
            .then(category => dispatch({ type: GET_ONE_CATEGORY, payload: category }))
    }
}


export function addCategory(category) {
    return function (dispatch) {
        categoryService.addCategory(category)
            .then(category => category.data)
            .then(category => dispatch({ type: POST_ONE_CATEGORY, payload: category }))
    }
}
export function deleteCategory(id) {
    return function (dispatch) {
        categoryService.deleteCategory(id)
            .then(category => category.data)
            .then(category => dispatch({ type: DELETE_ONE_CATEGORY, payload: category }))
    }
}

export function updateCategory(id, category) {
    return function (dispatch) {
        categoryService.updateCategory(id, category)
            .then(category => category.data)
            .then(category => dispatch({ type: PUT_ONE_CATEGORY, payload: category }))
    }

}
