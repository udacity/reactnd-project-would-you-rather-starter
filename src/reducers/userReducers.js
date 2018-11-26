import {
    GET_USERS
} from '../actions/types';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, 
                ...action.users
            };
        default:
            return state;
    }
};

export default userReducer;