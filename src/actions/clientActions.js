export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS ="GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const ADD_USER ="ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";

export function getUsers(){
    return {
        type: GET_USERS
    }
}
export function getUsersSuccess(data){
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}
export function addUser(data){
    return {
        type: ADD_USER,
        payload: data
    }
}
export function addUserSuccess(user){
    return {
        type: ADD_USER_SUCCESS,
        payload: user
    }
}