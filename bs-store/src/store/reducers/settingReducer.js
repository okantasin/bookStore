import {SET_MESSAGE} from '../actions/settingActions';
import {message} from '../initialValues/settingItems';

const initialValue={
    message
}

export default function settingReducer(state=initialValue,{type,payload}) {
    switch(type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: payload
            };
        default:
            return state;
    }
}