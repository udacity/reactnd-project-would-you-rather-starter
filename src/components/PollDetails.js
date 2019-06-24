import React from "react";
import { connect } from "react-redux";

import Profile from './Profile';

// TODO REMOVE
import { questions as Q } from '../utils/_DATA';

class PollDetails extends React.Component {
  getAnsweredClass = (option) => {
    return this.props.answer === option ? "answered" : "answered-no";
  };

  renderAnswered = () => {
    return(
      <div>
        <h3>Question Details (Your Answer is in <span className="answered">Green</span>)</h3>
        <img className="avatar" src={this.props.question.authorAvatarURL} alt={this.props.question.author}/>
        <h4 className={this.getAnsweredClass("optionOne")}>Option One ({this.props.optionOneVoteCount} of {this.props.totalVoteCount} Votes {this.props.optionOneVotePercentage}%)</h4>
        <p className="option">{this.props.optionOne}</p>

        <h4 className={this.getAnsweredClass("optionTwo")}>Option Two ({this.props.optionTwoVoteCount} of {this.props.totalVoteCount} Votes {this.props.optionTwoVotePercentage}%)</h4>
        <p className="option">{this.props.optionTwo}</p>
      </div>
    )
  };

  renderUnAnswered = () => {
    return(
      <div>
        <h3>Would You Rather?</h3>
        <img className="avatar" src={this.props.question.authorAvatarURL} alt={this.props.question.author}/>
        <form>
          <label>
            <input name="answer" type="radio"/>
            {this.props.optionOne}
          </label>
          <br/>
          <label>
            <input name="answer" type="radio"/>
            {this.props.optionTwo}
          </label>
          <br/>
          <input type="submit" value="Submit Answer"/>
        </form>
      </div>
    )
  };

  render() {
    return (
      <div>
        <Profile/>
        <div className="PollDetails">
          { this.props.isAnswered ? this.renderAnswered() : this.renderUnAnswered() }
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

function getQuestionById(questionId, questions, users) {
  let question = Object.values(questions).filter((question) => (question.id === questionId))[0] || Q["8xf0y6ziyjabvozdd253nd"]; // TODO REMOVE
  question.authorAvatarURL = users && process.env.PUBLIC_URL + users[question.author].avatarURL;
  return question;
}

function mapStateToProps({ loggedInUser, questions, users }, props) {
  const { questionId } = props.match.params;
  const question = getQuestionById(questionId, questions, users.users);
  const optionOneVoteCount = question.optionOne.votes.length;
  const optionTwoVoteCount = question.optionTwo.votes.length;
  const totalVoteCount = optionOneVoteCount + optionTwoVoteCount;
  const optionOneVotePercentage = optionOneVoteCount / totalVoteCount * 100;
  const optionTwoVotePercentage = optionTwoVoteCount / totalVoteCount * 100;
  const answer = getUsersAnswer(loggedInUser, question);
  const isAnswered = answer !== "";

  return {
    question,
    // optionOne: dig(question, ['optionOne', 'text'], ''),
    optionOne: question.optionOne.text,
    optionOneVoteCount,
    optionOneVotePercentage,
    optionTwo: question.optionTwo.text,
    optionTwoVoteCount,
    optionTwoVotePercentage,
    totalVoteCount,
    answer,
    isAnswered
  }
}

export default connect(mapStateToProps)(PollDetails);
