import React from "react";
import { Card, Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import Question from "../components/Question";
import PageTitle from "../components/PageTitle";
import "./Home.scss";

class Home extends React.Component {
  render() {
    const { questions, auth } = this.props;

    // check if user is auth
    const isUserAuthed = auth === null;

    // define open / answered question arrays to display
    const answeredQuestions = [];
    const openQuestions = [];

    return (
      <Container style={{ marginTop: 24 }}>
        <PageTitle>Polls</PageTitle>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Row>
            <Col sm={3} md={3}>
              <Nav
                variant="pills"
                className="flex-column"
                style={{ marginBottom: 24 }}
              >
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="open" disabled={isUserAuthed}>
                    Open
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="answered" disabled={isUserAuthed}>
                    Answered
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} md={9}>
              <Container>
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    {this.props.questions.length !== 0 &&
                      this.props.questions.map(question => (
                        <Question question={question} />
                      ))}{" "}
                  </Tab.Pane>
                  <Tab.Pane eventKey="open" disabled>
                    {this.props.questions.length !== 0 &&
                      this.props.questions.map(question => (
                        <Row className="question-card">
                          <Col>
                            <Card bg="secondary" text="white">
                              <Card.Header>
                                {question.author} asks...
                              </Card.Header>
                              <Card.Body>
                                <Container>
                                  <Row style={{ marginBottom: 24 }}>
                                    <Col sm={2}>
                                      <img
                                        src="https://image.flaticon.com/icons/svg/145/145843.svg"
                                        alt="User avatar"
                                        style={{ width: 50, height: 50 }}
                                      />
                                    </Col>
                                    <Col sm={10}>
                                      <h4>Would you rather...</h4>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col>
                                      <div className="answers-wrapper">
                                        <div
                                          className="choices first"
                                          tabIndex={0}
                                          role="button"
                                        >
                                          {question.optionOne.text}
                                        </div>
                                        <div
                                          className="choices second"
                                          tabIndex={0}
                                          role="button"
                                        >
                                          {question.optionTwo.text}
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Container>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      ))}{" "}
                  </Tab.Pane>
                  <Tab.Pane eventKey="answered">
                    {this.props.questions.length !== 0 &&
                      this.props.questions.map(question => (
                        <Row className="question-card">
                          <Col>
                            <Card bg="secondary" text="white">
                              <Card.Header>
                                {question.author} asks...
                              </Card.Header>
                              <Card.Body>
                                <Container>
                                  <Row style={{ marginBottom: 24 }}>
                                    <Col sm={2}>
                                      <img
                                        src="https://image.flaticon.com/icons/svg/145/145843.svg"
                                        alt="User avatar"
                                        style={{ width: 50, height: 50 }}
                                      />
                                    </Col>
                                    <Col sm={10}>
                                      <h4>Would you rather...</h4>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col>
                                      <div className="answers-wrapper">
                                        <div
                                          className="choices first"
                                          tabIndex={0}
                                          role="button"
                                        >
                                          {question.optionOne.text}
                                        </div>
                                        <div
                                          className="choices second"
                                          tabIndex={0}
                                          role="button"
                                        >
                                          {question.optionTwo.text}
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </Container>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      ))}{" "}
                  </Tab.Pane>
                </Tab.Content>
              </Container>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

Home.defaultProps = {
  isUserAuthed: false,
};

function mapStateToProps({ users, questions, auth }) {
  const questionData = Object.keys(questions).map(question => ({
    id: questions[question].id,
    author: users[questions[question].author].name,
    authorAvatarURL: users[questions[question].author].avatarURL,
    optionOne: questions[question].optionOne,
    optionTwo: questions[question].optionTwo,
  }));

  return {
    questions: questionData,
    auth,
  };
}

export default connect(mapStateToProps)(Home);
