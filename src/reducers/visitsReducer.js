import {
    GET_VISITS, GET_VISIT_SUCCESS
} from "../actions/visitActions";
const initialState = {
    visits: [],
    loading: false,
    error: null
}
export function VisitListReducer(state = initialState, action){
    switch(action.type){
        case GET_VISIT_SUCCESS: {
            return {
                ...state,
                visits: action.payload,
                loading: false
            }
        }
        default: return state
    }
}