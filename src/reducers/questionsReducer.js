import {
    GET_ALL_QUESTIONS,
    GET_ALL_QUESTIONS_SUCCESS
} from "../actions/questionAction";
const initialState = {
    questions: [],
    loading: false,
    error: null
}
export function questionsListReducer(state = initialState, action){
    switch (action.type){
        case GET_ALL_QUESTIONS: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_ALL_QUESTIONS_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                questions: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}