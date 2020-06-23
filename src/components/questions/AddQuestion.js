import React, { Component } from 'react'
import { FormControl,  TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { SecondaryColorBtn } from '../styled'
import { addQuestion } from '../../actions'
import './addQuestion.css'
import SyncLoader from 'react-spinners/SyncLoader'
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

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions,
    }
}

class AddQuestion extends Component {
    state = {
        author: this.props.authedUser,
        [OPTION_ONE_KEY]: '',
        [OPTION_TWO_KEY]: '',
        showAlert: false,
        showAddingLoader: false,
    }
    inputChanged(e, key) {
        this.setState({
            [key]: e.target.value,
        })
    }
    addQuestion(history) {
        if (allValuesFilled.call(this)) {
            this.setState({
                showAlert: false,
                showAddingLoader: true,
            })
            this.props.dispatch(addQuestion(this.state)).then(() => {
                this.setState({
                    showAddingLoader: false,
                })
                history.push('/');
            })
            return;
        }
        this.setState({
            showAlert: true,
        })
    }
    render() {
        const { history } = this.props
        const { optionOne, optionTwo, showAlert, showAddingLoader } = this.state
        return (
            <div className="add-question-container">
                <div className="add-question-form-container">
                    <div className="form-control-title">{FORM_CONTROL_TITLE}</div>
                        <FormControl className="form-control">
                            <TextField required fullWidth id="option-one" aria-describedby="option-one-text" label="Option One"value={optionOne} onChange={(event) => this.inputChanged(event, OPTION_ONE_KEY)}/>
                        </FormControl>
                        <FormControl className="form-control">
                            <TextField required fullWidth id="option-two" aria-describedby="option-two-text" label="Option Two" value={optionTwo} onChange={(event) => this.inputChanged(event, OPTION_TWO_KEY)}/>
                    </FormControl>
                    <SecondaryColorBtn onClick={() => { this.addQuestion(history)}}>
                        {CTA_BUTTON_TEXT}
                    </SecondaryColorBtn>
                    {showAlert &&  (
                        <Alert severity="error">{ALERT_TEXT}</Alert>
                    )}
                </div>
                {showAddingLoader && (
                    <div className="loading-container">
                        <SyncLoader loading={showAddingLoader} color={"#04406D"}></SyncLoader>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddQuestion)
