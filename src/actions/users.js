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
