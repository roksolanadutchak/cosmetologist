import { ajax } from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import { mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { addQuestionSuccess, ADD_QUESTION, getAllQuestionsSuccess, GET_ALL_QUESTIONS } from '../actions/questionAction';

export const addQuestionEpic = action$ => action$.pipe(
    ofType(ADD_QUESTION),
    mergeMap(action => ajax({
        url: 'http://localhost:8080/questions/save',
        method: "POST",
        body: action.payload
    }).pipe(
        map(question => addQuestionSuccess(question.response))
    ))
)
export const getAllQuestionsEpic = action$ => action$.pipe(
    ofType(GET_ALL_QUESTIONS),
    mergeMap((action) => ajax.getJSON('http://localhost:8080/questions/all').pipe(
        map(response => getAllQuestionsSuccess(response))
    ))
)