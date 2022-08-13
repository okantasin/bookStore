import { combineReducers } from 'redux';
import settingReducer from "./reducers/settingReducer"
import categoryReducer from "./reducers/categoryReducer";
import authorReducer from "./reducers/authorReducer";
import bookReducer from "./reducers/bookReducer"
const rootReducer = combineReducers({
    setting: settingReducer,
    category: categoryReducer,
    author:authorReducer,
    book: bookReducer
});
export default rootReducer;