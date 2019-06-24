import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Polls extends React.Component {
  state = {
    pollView: "unanswered"
  };

  handlePollViewChanged = (event) => {
    this.setState({ pollView: event.target.value });
  };

  renderAnswered = () => {
    return (
      this.state.pollView === "answered" &&
      <div>
        <p>Answered</p>
        {
          this.props.answeredPolls.map((question) => (
            <div className="Poll" key={question.id}>
              <p>{question.author}</p>
              <p>{question.timestamp}</p>
              <p>{question.optionOne.text}</p>
              <p>{question.optionTwo.text}</p>
              <p>
                <Link to={{
                  pathname: `/questions/${question.id}`,
                  state: {loggedInUser: this.props.loggedInUser}}}>View Details</Link>
              </p>
            </div>
          ))
        }
      </div>
    );
  };

  renderUnanswered = () => {
      return (
        this.state.pollView === "unanswered" &&
        <div>
          <p>Unanswered</p>
          {
            this.props.unansweredPolls.map((question) => (
              <div className="Poll" key={question.id}>
                <p>{question.author}</p>
                <p>{question.timestamp}</p>
                <p>{question.optionOne.text}</p>
                <p>{question.optionTwo.text}</p>
                <p>
                  <Link to={{
                    pathname: `/questions/${question.id}`,
                    state: {loggedInUser: this.props.loggedInUser}}}>View Details</Link>
                </p>
              </div>
            ))
          }
        </div>
      );
  };

  render() {
    return (
      <div className="Polls">
        <select value={this.state.pollView} onChange={this.handlePollViewChanged}>
          <option value="unanswered">Unanswered Polls</option>
          <option value="answered">Answered Polls</option>
        </select>
        <div>
          { this.renderAnswered() }
          { this.renderUnanswered() }
        </div>
      </div>
    );
  }
}

function didUserAnswerQuestion(user, question) {
  return Object.keys(user.answers).includes(question.id);
}

function answeredPolls(loggedInUser, questions) {
  return questions.filter((question) => (didUserAnswerQuestion(loggedInUser, question)));
}

function unansweredPolls(loggedInUser, questions) {
  return questions.filter((question) => (!didUserAnswerQuestion(loggedInUser, question)));
}

function mapStateToProps({ loggedInUser, questions }) {
  const sortedQuestions = Object.values(questions).sort((a, b) => a.timestamp - b.timestamp);

  return {
    unansweredPolls: unansweredPolls(loggedInUser, sortedQuestions),
    answeredPolls: answeredPolls(loggedInUser, sortedQuestions),
    loggedInUser
  };
}

export default connect(mapStateToProps)(Polls);
