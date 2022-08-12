import { combineReducers } from 'redux';
import settingReducer from "./reducers/settingReducer"
import categoryReducer from "./reducers/categoryReducer";
import authorReducer from "./reducers/authorReducer";
const rootReducer = combineReducers({
    setting: settingReducer,
    category: categoryReducer,
    author: authorReducer
});
export default rootReducer;