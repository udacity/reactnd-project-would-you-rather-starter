import React from "react";
import { connect } from "react-redux";

import Profile from './Profile';

// TODO REMOVE
import { questions as Q } from '../utils/_DATA';

class PollDetails extends React.Component {
  getAnsweredClass = (option) => {
    return this.props.answer === option ? "answered" : "";
  };

  render() {
    return (
      <div>
        <Profile/>
        <div className="PollDetails">
          <h3>Question Details</h3>

          <h4 className={this.getAnsweredClass("optionOne")}>Option One ({this.props.optionOneVoteCount} of {this.props.totalVoteCount} Votes {this.props.optionOneVotePercentage}%)</h4>
          <p className="option">{this.props.optionOne}</p>

          <h4 className={this.getAnsweredClass("optionTwo")}>Option Two ({this.props.optionTwoVoteCount} of {this.props.totalVoteCount} Votes {this.props.optionTwoVotePercentage}%)</h4>
          <p className="option">{this.props.optionTwo}</p>

          {this.props.answer &&
          <div>
            <h4>Your Answer</h4>
            {this.props.answer}
          </div>
          }
        </div>
      </div>
    );
  }
}

function getUsersAnswer(loggedInUser, question) {
  return loggedInUser.answers[question.id] || "";
}

function dig(object, keys, defaultValue) {
  if  (object === null || object === undefined) {
    return defaultValue;
  }

  const key = keys[0];
  const value = object[key];

  if (value === null && value === undefined) {
    return defaultValue;
  }

  if (keys.length === 1) {
    return value;
  }

  if (typeof value === 'object') {
    return dig(value, keys.slice(1), defaultValue)
  }
}

function mapStateToProps({ loggedInUser, questions, users }, props) {
  const { questionId } = props.match.params;
  const question = Object.values(questions).filter((question) => (question.id === questionId))[0] || Q["8xf0y6ziyjabvozdd253nd"]; // TODO REMOVE
  const userCount = Object.values(users).length;
  const optionOneVoteCount = question.optionOne.votes.length;
  const optionTwoVoteCount = question.optionTwo.votes.length;
  const totalVoteCount = optionOneVoteCount + optionTwoVoteCount;
  const optionOneVotePercentage = optionOneVoteCount / totalVoteCount * 100;
  const optionTwoVotePercentage = optionTwoVoteCount / totalVoteCount * 100;

  return {
    question: question,
    // optionOne: dig(question, ['optionOne', 'text'], ''),
    optionOne: question.optionOne.text,
    optionOneVoteCount,
    optionOneVotePercentage,
    optionTwo: question.optionTwo.text,
    optionTwoVoteCount,
    optionTwoVotePercentage,
    totalVoteCount,
    answer: getUsersAnswer(loggedInUser, question)
  }
}

export default connect(mapStateToProps)(PollDetails);
