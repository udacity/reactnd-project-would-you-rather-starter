import { _getQuestions, _getUsers, _saveQuestionAnswer } from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }));
}

export function savePollAnswer(userId, questionId, answer) {
  return _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer })
}
