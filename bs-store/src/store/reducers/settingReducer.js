import {SET_MESSAGE, SET_THEME, GET_THEME, CLOSE_SNACKBAR} from '../actions/settingActions';
import {message, showSnackbar, theme, pageSize} from '../initialValues/settingItems';

const initialValue={
    theme,
    pageSize,
    message,
    showSnackbar
}

export default function settingReducer(state=initialValue,{type,payload}) {
    switch(type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: payload,
                showSnackbar : true
            };

        case SET_THEME:
            return {
                ...state,
                theme: payload
            };
        case GET_THEME:
            return {
                ...state,
                theme: theme
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                showSnackbar: false,
                message:''
            };
            
        default:
            return{
                ...state
            };
    }
}

