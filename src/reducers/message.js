import * as type from '../constants/ActionTypes';
import * as MSG from '../constants/Message';
var initialState = MSG.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case type.CHANGE_MESSAGE:
            state = action.message
            return [...state];
        default: return [...state];
    }
}

export default message;