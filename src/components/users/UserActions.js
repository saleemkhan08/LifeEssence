import { database } from "../../store";
export const USERS = "users";
export const NAME = "name";

export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";


export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_BEGIN = "DELETE_USER_BEGIN";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        const query = database
            .ref()
            .child(USERS)
            .orderByChild("timeStamp");
        console.log("Query >>>>>>>")
        console.log(query)
        query.on("value", querySnapshot => {
            console.log("querySnapshot : ")
            console.log(querySnapshot.val())
            const userList = [];
            querySnapshot.forEach(child => {
                const user = child.val();
                if (user.type === "user") {
                    userList.push(user);
                }
            })
            dispatch(fetchUsersSuccess(userList));
        });
    };
}

export function fetchUser(uid) {
    return dispatch => {
        dispatch(fetchUserBegin());
        const query = database
            .ref()
            .child(USERS)
            .child(uid);
        query.on("value", snapshot => {
            dispatch(fetchUserSuccess(snapshot.val()));
        });
    };
}

export const fetchUserBegin = () => ({
    type: FETCH_USER_BEGIN
});

export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fetchUserError = () => ({
    type: FETCH_USER_ERROR
});

export const loginUser = user => ({
    type: LOGIN_USER,
    payload: user
});
export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const validateEmail = email => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

export const validatePassword = password => {
    return password.length >= 6;
}

export const validateName = name => {
    return name.length >= 3;
}

export const validatePhoneNo = phoneNo => {
    var pattern = new RegExp(/^\d{10}$/);
    return pattern.test(phoneNo);
}

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersError = () => ({
    type: FETCH_USERS_ERROR
});

export function addUsers(userDetails) {
    return dispatch => {
        const userRef = database.ref(USERS).child(userDetails.uid);
        userRef.set(userDetails)
            .then(() => {
                dispatch(updateUsersSuccess());
            })
            .catch(error => {
                dispatch(updateUsersError(error));
            });
    };
}

export const addUsersBegin = () => ({
    type: ADD_USER_BEGIN
});

export const addUsersSuccess = () => ({
    type: ADD_USER_SUCCESS
});

export const addUsersError = error => ({
    type: ADD_USER_ERROR,
    payload: error
});

export const updateUsersBegin = () => ({
    type: UPDATE_USER_BEGIN
});

export const updateUsersSuccess = () => ({
    type: UPDATE_USER_SUCCESS
});

export const updateUsersError = error => ({
    type: UPDATE_USER_ERROR,
    payload: error
});

export function deleteUsers(userDetails) {
    return dispatch => {
        dispatch(deleteUsersBegin());
        const userRef = database.ref(USERS).child(userDetails.uid);
        userRef.remove()
            .then(() => {
                dispatch(deleteUsersSuccess());
            })
            .catch(error => {
                dispatch(deleteUsersError(error));
            });
    };
}

export const deleteUsersBegin = () => ({
    type: DELETE_USER_BEGIN
});

export const deleteUsersSuccess = () => ({
    type: DELETE_USER_SUCCESS
});

export const deleteUsersError = error => ({
    type: DELETE_USER_ERROR,
    payload: error
});
