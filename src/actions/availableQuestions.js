import { isEmptyObject } from '../helpers'

export const SET_AVAILABLE_QUESTIONS = 'SET_AVAILABLE_QUESTIONS'

function _formatAvailableQuestions({ users, authedUser, questions }) {
    const unAuthedUserQuestions = []
    if (!isEmptyObject(users && authedUser && questions)) {
        const unAuthedUserIds = Object.keys(users).filter(userKey => userKey !== authedUser)
        if (unAuthedUserIds) {
            unAuthedUserIds.forEach((key) => {
                const userQuestionIds = users[key].questions
                if (userQuestionIds) {
                    userQuestionIds.forEach((id) => {
                        const questionObj = questions[id]
                        if (questionObj) {
                            unAuthedUserQuestions.push(questionObj)
                        }
                    })
                }
            })
        }
    }
    return unAuthedUserQuestions
}

export function setAvailableQuestions(props) {
    const availableQuestions = _formatAvailableQuestions(props)
    return {
        type: SET_AVAILABLE_QUESTIONS,
        availableQuestions
    }
}
