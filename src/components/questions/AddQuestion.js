import React, { Component } from 'react'
import { FormControl,  TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { SecondaryColorBtn } from '../styled'
import { addQuestion } from '../../actions'
import './addQuestion.css'
import { connect } from 'react-redux'

const CTA_BUTTON_TEXT = 'Add Question'
const OPTION_ONE_KEY = 'optionOneText'
const OPTION_TWO_KEY = 'optionTwoText'
const ALERT_TEXT = 'Please fill in all required fields before submitting your question'
const REQUIRED_VALUES = [OPTION_ONE_KEY, OPTION_TWO_KEY]
const FORM_CONTROL_TITLE = 'Would You Rather?'

function allValuesFilled() {
    return Object.keys(this.state).filter((key) => REQUIRED_VALUES.indexOf(key) > -1).map((key) => this.state[key].length > 0).every(val => val)
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

class AddQuestion extends Component {
    state = {
        author: this.props.authedUser,
        [OPTION_ONE_KEY]: '',
        [OPTION_TWO_KEY]: '',
        showAlert: false,
    }
    inputChanged(e, key) {
        this.setState({
            [key]: e.target.value,
        })
    }
    addQuestion() {
        if (allValuesFilled.call(this)) {
            this.setState({
                showAlert: false,
            })
            this.props.dispatch(addQuestion(this.state))
            return;
        }
        this.setState({
            showAlert: true,
        })
    }
    render() {
        const { optionOne, optionTwo, showAlert } = this.state
        return (
            <div className="add-question-form-container">
                    <div className="form-control-title">{FORM_CONTROL_TITLE}</div>
                    <FormControl className="form-control">
                        <TextField required fullWidth id="option-one" aria-describedby="option-one-text" label="Option One"value={optionOne} onChange={(event) => this.inputChanged(event, OPTION_ONE_KEY)}/>
                    </FormControl>
                    <FormControl className="form-control">
                        <TextField required fullWidth id="option-two" aria-describedby="option-two-text" label="Option Two" value={optionTwo} onChange={(event) => this.inputChanged(event, OPTION_TWO_KEY)}/>
                </FormControl>
                <SecondaryColorBtn onClick={() => { this.addQuestion()}}>
                    {CTA_BUTTON_TEXT}
                </SecondaryColorBtn>
                {showAlert &&  (
                    <Alert severity="error">{ALERT_TEXT}</Alert>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddQuestion)
