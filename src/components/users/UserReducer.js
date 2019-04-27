import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from "./UserActions";

const initialState = {
    users: [],
    isLoading: true,
    error: null,
    drawer: false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                chefs: action.payload
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                chefs: []
            };
        default:
            return state;
    }
};

export default UserReducer;
