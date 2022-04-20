import {
    ADD_QUESTION,
    ADD_QUESTION_SUCCESS
} from "../actions/questionAction";
const initialState = {
    question: {},
    error: null
}
export function questionReducer(state = initialState, action){
    switch(action.type){
        // case ADD_QUESTION: {
        //     return {
        //         ...state,
        //         question: action.payload
        //     }
        // }
        case ADD_QUESTION_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                question: action.payload
            }
        }
        default: return state;
    }
}