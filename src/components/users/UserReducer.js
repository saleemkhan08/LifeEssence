import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    ADD_USER_BEGIN,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    LOGIN_USER,
    LOGOUT_USER
} from "./UserActions";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
    isLoggedIn: false,
    currentUser: undefined
};

const UserReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(action.payload)

    switch (action.type) {
        case LOGIN_USER:
            console.log(LOGIN_USER)
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload
            };

        case LOGOUT_USER:
            console.log(LOGOUT_USER)
            return {
                ...state,
                isLoggedIn: false,
                currentUser: undefined
            };

        case FETCH_USER_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null,
                tempUser: undefined
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tempUser: action.payload
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                tempUser: undefined
            };

        case FETCH_USERS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            };

        case FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                users: []
            };

        case ADD_USER_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case ADD_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default UserReducer;
