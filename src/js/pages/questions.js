import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

// Components
import QuestionCard from "../components/QuestionCard";
// ./Components

const Questions = () => {
  const selectedUser = useSelector((state) => state.users?.selected);
  const questions = useSelector((state) => state.questions?.data);
  const isLoaded = useSelector((state) => state.questions?.loading);

  return (
    <Fragment>
      Current user is - {selectedUser && selectedUser.name}
      {isLoaded && "Loading..."}
      {!isLoaded && (
        <Row>
          <Col md={6}>
            Unanswered questions:
            <ul>
              {Object.keys(questions)
                .filter((el) => !questions[el].optionOne.votes.length || !questions[el].optionTwo.votes.length)
                .map((el) => (
                  <QuestionCard
                    key={questions[el].id}
                    id={questions[el].id}
                    author={questions[el].author}
                    text={questions[el].optionOne.text}
                    question={questions[el]}
                  />
                ))}
            </ul>
          </Col>
          <Col md={6}>
            Answered questions:
            <ul>
              {Object.keys(questions)
                .filter((el) => questions[el].optionOne.votes.length || questions[el].optionTwo.votes.length)
                .map((el) => (
                  <QuestionCard
                    key={questions[el].id}
                    id={questions[el].id}
                    author={questions[el].author}
                    text={questions[el].optionOne.text}
                    question={questions[el]}
                  />
                ))}
            </ul>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default Questions;
