export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SET_QUESTIONS = 'SET_QUESTIONS'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function setQuestions(questions) {
    return {
        type: SET_QUESTIONS,
        questions,
    }
}
