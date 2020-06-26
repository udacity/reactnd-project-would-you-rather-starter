import { receiveQuestions, setAvailableQuestions, updateUserAnswers } from '../actions'

export const UPDATE_QUESTIONS_WITH_VOTES = 'UPDATE_QUESTIONS_WITH_VOTES'

const OPTION_ONE = 'optionOne'
const OPTION_TWO = 'optionTwo'

function getOtherOption(option) {
    return option === OPTION_TWO ? OPTION_ONE : OPTION_TWO
}

function update(questionId, option, { authedUser, questions }) {
    return Object.values(questions).map((question) => {
        if (question && question.id === questionId) {
            let otherOption = getOtherOption(option)
            if (question[option] && question[option].votes) {
                if (question[option].votes.indexOf(authedUser) === -1) {
                    question[option].votes.push(authedUser)
                } else {
                    question[option].votes.splice(question[option].votes.indexOf(authedUser), 1)
                }
            }
            if (question[otherOption] && question[otherOption].votes) {
                if (question[otherOption].votes.indexOf(authedUser) > -1) {
                    question[otherOption].votes.splice(question[otherOption].votes.indexOf(authedUser) , 1)
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
        dispatch(receiveQuestions(props.questions))
        dispatch(updateUserAnswers(questionId, option, props))
        dispatch(setAvailableQuestions(props))
    }
}
