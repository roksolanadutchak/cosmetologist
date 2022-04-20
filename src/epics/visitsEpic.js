import { ajax } from "rxjs/ajax";
import { map} from 'rxjs/operators';
import { mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import { getVisitsSuccess, GET_VISITS } from "../actions/visitActions";
export const userVisitsEpic = action$ => action$.pipe(
    ofType(GET_VISITS),
    mergeMap((action) => ajax.getJSON(`http://localhost:8080/visits/${action.payload}?clientId=${action.payload}`).pipe(
        map(response => getVisitsSuccess(response))
    ))
)