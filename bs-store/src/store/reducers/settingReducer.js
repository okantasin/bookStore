import {
    SET_THEME,
    GET_THEME,
    CLOSE_SNACKBAR,
    SET_SNACKBAR
} from '../actions/settingActions';
import { snackbar, theme, pageSize } from '../initialValues/settingItems';

const initialValue = {
    theme,
    pageSize,
    snackbar
}

export default function settingReducer(state = initialValue, { type, payload }) {
    switch (type) {
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
                snackbar: {
                    message: '',
                    open: false
                }
            };
        case SET_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    message: payload.message,
                    duration: payload.duration,
                    severity: payload.severity,
                    open:true,
                }
            }
        default:
            return {
                ...state
            };
    }
}

