import {
    ADD_USER,
    ADD_USER_SUCCESS
} from "../actions/clientActions";
const initialState = {
    user: {},
    error: null
}
export function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        default: return state;
    }
}