import { database } from "../store";
export const USERS = "users";
export const NAME = "name";

export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_BEGIN = "DELETE_USER_BEGIN";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        const query = database
            .ref()
            .child(USERS)
            .orderByChild(NAME);
        query.on("value", querySnapshot => {
            const users = querySnapshot.val();
            if (users) {
                const userList = [];
                const uids = Object.keys(users);
                uids.forEach(uid => {
                    const user = users[uid];
                    if (user.type === USERS) {
                        userList.push(user);
                    }
                });
                dispatch(fetchUsersSuccess(userList));
            } else {
                dispatch(fetchUsersError());
            }
        });
    };
}

export const fetchUsersBegin = () => ({
    type: FETCH_USER_BEGIN
});

export const fetchUsersSuccess = chefs => ({
    type: FETCH_USER_SUCCESS,
    payload: chefs
});

export const fetchUsersError = () => ({
    type: FETCH_USER_ERROR
});

export function addUsers(userDetails) {
    return dispatch => {
        const userRef = database.ref(USERS).push();
        dispatch(addUsersBegin());
        userRef.set(userDetails)
            .then(() => {
                dispatch(addUsersSuccess());
            })
            .catch(error => {
                dispatch(addUsersError(error));
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
    payload: { error }
});

export function updateUsers(userDetails) {
    return dispatch => {
        const userRef = database.ref(USERS).child(userDetails.uid);
        dispatch(updateUsersBegin());
        userRef.set(userDetails)
            .then(() => {
                dispatch(updateUsersSuccess());
            })
            .catch(error => {
                dispatch(updateUsersError(error));
            });
    };
}

export const updateUsersBegin = () => ({
    type: UPDATE_USER_BEGIN
});

export const updateUsersSuccess = () => ({
    type: UPDATE_USER_SUCCESS
});

export const updateUsersError = error => ({
    type: UPDATE_USER_ERROR,
    payload: { error }
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
    payload: { error }
});
