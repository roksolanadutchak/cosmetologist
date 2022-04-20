export const GET_VISITS = "GET_VISITS";
export const GET_VISIT_SUCCESS = "GET_VISIT_SUCCESS";
export const ADD_VISIT = "ADD_VISIT";
export const ADD_VISIT_SUCCESS = "ADD_VISIT_SUCCESS";
export function getVisits(data){
    return {
        type: GET_VISITS,
        payload: data
    }
}
export function getVisitsSuccess(data){
    return {
        type: GET_VISIT_SUCCESS,
        payload: data
    }
}
export function addVisit(data){
    return {
        type: ADD_VISIT,
        payload: data
    }
}
export function addVisitSuccess(visit){
    return {
        type: ADD_VISIT_SUCCESS,
        payload: visit
    }
}