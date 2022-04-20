import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import { getUsersEpic } from "./epics/usersEpic";
import { UsersListReducer } from "./reducers/clientsListReducer";
import { addQuestionEpic } from "./epics/questionEpic";
import { questionReducer } from "./reducers/questionReducer";
import { questionsListReducer } from "./reducers/questionsReducer";
import { getAllQuestionsEpic } from "./epics/questionEpic";
import { userVisitsEpic } from "./epics/visitsEpic";
import { VisitListReducer } from "./reducers/visitsReducer";
export function configureStore(){
    const rootEpic = combineEpics(getUsersEpic, addQuestionEpic, getAllQuestionsEpic, userVisitsEpic);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: UsersListReducer,
        question: questionReducer,
        questions: questionsListReducer,
        visits: VisitListReducer
    })
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}