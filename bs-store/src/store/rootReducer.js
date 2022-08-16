import { combineReducers } from 'redux';
import settingReducer from "./reducers/settingReducer"
import categoryReducer from "./reducers/categoryReducer";
import authorReducer from "./reducers/authorReducer";
import bookReducer from "./reducers/bookReducer"
import authReducer from './reducers/authReducer';
const rootReducer = combineReducers({
    setting: settingReducer,
    category: categoryReducer,
    author:authorReducer,
    book: bookReducer,
    auth:authReducer
});
export default rootReducer;