import { _getUsers,_getQuestions } from "./_DATA";

export function getIntialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}