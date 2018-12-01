import React, { Component } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import Question from "../components/Question";
import Voters from "../components/Voters";
import { connect } from "react-redux";

class IndividualQuestion extends Component {
  render() {
    const { question, users } = this.props;

    /**
     * votes.optionOne {}
     * avatarURL, name,
     * votes.optionTwo {}
     */
    let votes = {
      optionOne: [],
      optionTwo: [],
    };

    let optionOneVotes = [];
    let optionTwoVotes = [];

    if (question !== undefined) {
      optionOneVotes = question.optionOne.votes.map(voter => ({
        avatarURL: users[voter].avatarURL,
        name: users[voter].name,
      }));
      optionTwoVotes = question.optionTwo.votes.map(voter => ({
        avatarURL: users[voter].avatarURL,
        name: users[voter].name,
      }));
    }

    return (
      <Container style={{ marginTop: 24 }}>
        {question !== undefined && (
          <Question question={question} individual={true} />
        )}
        <div className="is-center">
          <h2>Votes</h2>
        </div>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Card style={{ marginTop: 8 }}>
              <Card.Header>Option One</Card.Header>
              <Voters votes={optionOneVotes} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Card style={{ marginTop: 8 }}>
              <Card.Header>Option Two</Card.Header>
              <Voters votes={optionTwoVotes} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ users, questions }, props) {
  const qid = props.match.params.qid;
  const questionData = Object.keys(questions).map(question => ({
    id: questions[question].id,
    timestamp: questions[question].timestamp,
    author: users[questions[question].author].name,
    authorAvatarURL: users[questions[question].author].avatarURL,
    optionOne: questions[question].optionOne,
    optionTwo: questions[question].optionTwo,
  }));
  const individualQuestion = questionData.filter(
    question => question.id === qid
  );

  return {
    question: individualQuestion[0],
    users,
  };
}

export default connect(mapStateToProps)(IndividualQuestion);
