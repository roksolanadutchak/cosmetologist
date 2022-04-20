import { ajax } from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import { mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import {
    GET_USERS, GET_USERS_ERROR, getUsersSuccess
} from "../actions/clientActions";

export const getUsersEpic = action$ => action$.pipe(
    ofType(GET_USERS),
    mergeMap((action) =>ajax.getJSON('http://localhost:8080/clients/clients').pipe(
     map(response => getUsersSuccess(response)),
        catchError(error => of({
            type: GET_USERS_ERROR,
            payload: error
        }))
    ))
)

