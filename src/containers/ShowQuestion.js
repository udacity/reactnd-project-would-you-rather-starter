import React, { Component } from "react";

import { connect } from "react-redux";
import { isQuestionAnswered } from "../utils/api";
import AnswerQuestion from "./AnswerQuestion";
import ResultPage from "./ResultPage";

class ShowQuestion extends Component {

render(){
    const {question, user, isAnswered} = this.props; 
    
        return (
            isAnswered?
                <ResultPage question={question} signUser={this.props.signUser} user={user}/>
                :
                <AnswerQuestion question={question} signUser={this.props.signUser} user={user} />
        )

}
}

function mapStateToProps({signUser, users, questions}, ownProps) {
    const { question_id } = ownProps.match.params; 
    const {optionTwo, optionOne, author} =questions[question_id];

    return {
         signUser,
         user:users[author], 
         question:questions[question_id],
         isAnswered: isQuestionAnswered(optionTwo, optionOne, signUser)
        };
}
export default connect(mapStateToProps)(ShowQuestion);