import { setQuestions, updateAvailableQuestions, updateUserAnswers } from '../actions'

export const UPDATE_QUESTIONS_WITH_VOTES = 'UPDATE_QUESTIONS_WITH_VOTES'

function update(questionId, option, { authedUser, data: availableQuestions }) {
    return availableQuestions.map((question) => {
        if (question.id === questionId) {
            let votes = question && question[option] && question[option].votes
            if (votes) {
                if (votes.indexOf(authedUser) === -1) {
                    votes.push(authedUser)
                } else {
                    question[option].votes = votes.splice(1, votes.indexOf(authedUser))
                }
            }
            return question
        }
        return question
    })
}

export function updateQuestionsWithVotes(questionId, option, props) {
    update(questionId, option, props)
    return (dispatch) => {
        dispatch(setQuestions(props.questions))
        dispatch(updateAvailableQuestions(props.data))
        dispatch(updateUserAnswers(questionId, option, props))
    }
}
