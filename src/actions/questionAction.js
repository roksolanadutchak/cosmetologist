export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const GET_ALL_QUESTIONS_SUCCESS = "GET_ALL_QUESTIONS_SUCCESS";
export function addQuestion(data){
    console.log(data)
    return {
        type: ADD_QUESTION,
        payload: data
    }
}
export function addQuestionSuccess(question){
    console.log(question)
    return {
        type: ADD_QUESTION_SUCCESS,
        payload: question
    }
}
export function getAllQuestions(){
    return {
        type: GET_ALL_QUESTIONS
    }
}
export function getAllQuestionsSuccess(data){
    console.log(data)
    return {
        type: GET_ALL_QUESTIONS_SUCCESS,
        payload: data
    }
}