import { isEmptyObject} from '../helpers'

export const SET_AUTHED_USER_QUESTIONS = 'SET_AUTHED_USER_QUESTIONS'

function _formatAuthedUserQuestions({ users, authedUser, questions }) {
    const authedUserQuestions = []
    if (!isEmptyObject(users && authedUser && questions)) {
        const authedUserQuestionIds = users[authedUser].questions
        authedUserQuestionIds.map((id) => { // eslint-disable-line
            const questionObj = questions[id]
            if (questionObj) {
                authedUserQuestions.push(questionObj)
            }
        })
    }
    return authedUserQuestions
}

export function setAuthedUserQuestions(props) {
    const authedUserQuestions = _formatAuthedUserQuestions(props)
    return {
        type: SET_AUTHED_USER_QUESTIONS,
        authedUserQuestions: authedUserQuestions,
    }
}

export function addAuthedUserQuestion(store, formattedQuestion) {
    const authedUserQuestions = store.authedUserQuestions || []
    authedUserQuestions.push(formattedQuestion)
    return {
        type: SET_AUTHED_USER_QUESTIONS,
        authedUserQuestions: authedUserQuestions,
    }
}
