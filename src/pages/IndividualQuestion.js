import React, { Component } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import Question from "../components/Question";
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
            <Card>
              <Card.Header>Option One</Card.Header>
              <ListGroup variant="flush">
                {optionOneVotes.length !== 0 ? (
                  optionOneVotes.map(voter => (
                    <ListGroup.Item>
                      <Image
                        src={voter.avatarURL}
                        alt={`${voter.name} avatar`}
                        style={{ width: 32, height: 32, marginRight: 8 }}
                        roundedCircle
                      />
                      {voter.name}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No votes</ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6}>
          <Card>
              <Card.Header>Option Two</Card.Header>
              <ListGroup variant="flush">
                {optionTwoVotes.length !== 0 ? (
                  optionTwoVotes.map(voter => (
                    <ListGroup.Item>
                      <Image
                        src={voter.avatarURL}
                        alt={`${voter.name} avatar`}
                        style={{ width: 32, height: 32, marginRight: 8 }}
                        roundedCircle
                      />
                      {voter.name}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No votes</ListGroup.Item>
                )}
              </ListGroup>
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
