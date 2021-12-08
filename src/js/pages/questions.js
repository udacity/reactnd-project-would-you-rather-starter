import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Tab, Nav } from "react-bootstrap";

// Utils
import { isQuestionAnswered } from "../utils";
// ./Utils

// Components
import Loader from "../components/Loader";
import QuestionCard from "../components/QuestionCard";
// ./Components

const Questions = () => {
  const selectedUser = useSelector((state) => state.users?.selected);
  const users = useSelector((state) => state.users?.data);
  const questions = useSelector((state) => state.questions?.data);
  const isLoaded = useSelector((state) => state.questions?.loading);

  return (
    <Fragment>
      {isLoaded && <Loader />}
      {!isLoaded && (
        <Tab.Container defaultActiveKey={"unansweredQuestions"}>
          <Nav variant={"pills"} className={"mb-4"}>
            <Nav.Item>
              <Nav.Link eventKey={"unansweredQuestions"} role={"button"}>
                Unanswered
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"answeredQuestions"} role={"button"}>
                Answered
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey={"unansweredQuestions"}>
              <ul className={"list-unstyled"}>
                {Object.keys(questions)
                  .filter((el) => !isQuestionAnswered(selectedUser.id, questions[el].optionOne?.votes, questions[el].optionTwo?.votes))
                  .sort((a, b) => new Date(questions[b].timestamp) - new Date(questions[a].timestamp))
                  .map((el) => (
                    <QuestionCard
                      key={questions[el].id}
                      id={questions[el].id}
                      author={users[questions[el].author]?.name}
                      avatar={users[questions[el].author]?.avatarURL}
                      text={questions[el].optionOne.text}
                      question={questions[el]}
                    />
                  ))}
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey={"answeredQuestions"}>
              <ul className={"list-unstyled"}>
                {Object.keys(questions)
                  .filter((el) => isQuestionAnswered(selectedUser.id, questions[el].optionOne?.votes, questions[el].optionTwo?.votes))
                  .sort((a, b) => new Date(questions[b].timestamp) - new Date(questions[a].timestamp))
                  .map((el) => (
                    <QuestionCard
                      key={questions[el].id}
                      id={questions[el].id}
                      author={users[questions[el].author]?.name}
                      avatar={users[questions[el].author]?.avatarURL}
                      text={questions[el].optionOne.text}
                      question={questions[el]}
                    />
                  ))}
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      )}
    </Fragment>
  );
};

export default Questions;
