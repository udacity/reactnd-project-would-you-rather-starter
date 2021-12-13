//action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
//action creator
export function receiveQuestions(questions){
   return{
    type:RECEIVE_QUESTIONS,//DONT FORGET TO TYPE "type:"
    questions,
    }

}