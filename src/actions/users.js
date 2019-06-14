export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
} 

export function createQuestion({ id, author}) {
  return {
    type: CREATE_QUESTION,
    id,
    author
  }
}