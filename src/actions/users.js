export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function update(questionId, option, { authedUser, users }) {
    const user = users[authedUser]
    if (user) {
        const answers = user.answers
        if (answers[questionId] === option) {
            delete answers[questionId]
            return;
        }
        answers[questionId] = option
    }
}

export function updateUserAnswers(questionId, option, props) {
    update(questionId, option, props)
    return (dispatch) => {
        dispatch(receiveUsers(props.users))
    }
}

export function updateUserQuestions(store, questionId) {
    if (store.users[store.authedUser].questions && store.users[store.authedUser].questions.indexOf(questionId) === -1) {
        store.users[store.authedUser].questions.push(questionId)
    }
    return {
        type: RECEIVE_USERS,
        users: store.users,
    }
}
