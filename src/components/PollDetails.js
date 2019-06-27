import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import { savePollAnswer } from '../actions';

class PollDetails extends React.Component {
  state = {
    answer: ''
  };

  getAnsweredClass = (option) => {
    return this.props.answer === option ? "answered" : "answered-no";
  };

  renderAnswered = () => {
    const {
      question,
      optionOne,
      optionTwo,
      optionOneVoteCount,
      optionTwoVoteCount,
      optionOneVotePercentage,
      optionTwoVotePercentage,
      totalVoteCount
    } = this.props;

    return(
      <div>
        <h3>Question Details (Your Answer is in <span className="answered">Green</span>)</h3>
        <img className="avatar" src={question.authorAvatarURL} alt={question.author}/>
        <h4 className={this.getAnsweredClass("optionOne")}>Option One ({optionOneVoteCount} of {totalVoteCount} Votes {optionOneVotePercentage}%)</h4>
        <p className="option">{optionOne}</p>

        <h4 className={this.getAnsweredClass("optionTwo")}>Option Two ({optionTwoVoteCount} of {totalVoteCount} Votes {optionTwoVotePercentage}%)</h4>
        <p className="option">{optionTwo}</p>
      </div>
    );
  };

  handlePollAnswerSubmitted = (event) => {
    const { loggedInUser, question } = this.props;
    event.preventDefault();
    this.props.savePollAnswer(loggedInUser.id, question.id, this.state.answer);
  };

  handlePollAnswerChanged = (event) => {
    this.setState({
      answer: event.target.value
    });
  };

  renderUnanswered = () => {
    const {
      question,
      optionOne,
      optionTwo
    } = this.props;

    return(
      <div>
        <h3>Would You Rather?</h3>
        <img className="avatar" src={question.authorAvatarURL} alt={question.author}/>
        <form onSubmit={this.handlePollAnswerSubmitted} onChange={this.handlePollAnswerChanged}>
          <label>
            <input name="answer" type="radio" value="optionOne"/>
            {optionOne}
          </label>
          <br/>
          <label>
            <input name="answer" type="radio" value="optionTwo"/>
            {optionTwo}
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
          { this.props.isAnswered ? this.renderAnswered() : this.renderUnanswered() }
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
  let filteredQuestion = Object.values(questions).filter((question) => (question.id === questionId))[0];
  return {
    ...filteredQuestion,
    authorAvatarURL: filteredQuestion.authorAvatarURL = users && process.env.PUBLIC_URL + users[filteredQuestion.author].avatarURL
  };
}

function mapStateToProps({ loggedInUser, questions, users }, props) {
  const { questionId } = props.match.params;
  const question = getQuestionById(questionId, questions, users);
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
    isAnswered,
    loggedInUser
  }
}

const mapDispatchToProps = {
  savePollAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails);
