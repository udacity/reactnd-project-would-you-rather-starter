import {
    _getQuestions,
    _getUsers,
    _saveNewUser,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function getUsers() {
    return _getUsers();
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser, qId, answer) {
    return _saveQuestionAnswer(
        {
            authedUser,
            qId,
            answer
        }
    )
}