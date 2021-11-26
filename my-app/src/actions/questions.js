//action type
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
//action creator
export function receiveQuestions(questions){
   return{
    RECEIVE_QUESTIONS,
    questions,
    }

}