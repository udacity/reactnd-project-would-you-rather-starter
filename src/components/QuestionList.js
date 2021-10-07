import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questions";
import Question from "../components/Question";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

const QuestionsWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tab-container {
    width: 50%;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #272727;
  }
`;

const Questions = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const questions = useSelector((state) => state.questions.questions);
  const queIds = Object.keys(questions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <QuestionsWrapper>
      <Tabs className="tab-container">
        <TabList>
          <Tab>
            <h3>Unanswered</h3>
          </Tab>
          <Tab>
            <h3>Answered</h3>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {queIds
              .filter(
                (queId) =>
                  !questions[queId].optionOne.votes.includes(authedUser.id) &&
                  !questions[queId].optionTwo.votes.includes(authedUser.id)
              )
              .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
              .map((queId) => (
                <Link key={queId} to={`/questions/${queId}`}>
                  <Question queId={queId} questions={questions} />
                </Link>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {queIds
              .filter(
                (queId) =>
                  questions[queId].optionOne.votes.includes(authedUser.id) ||
                  questions[queId].optionTwo.votes.includes(authedUser.id)
              )
              .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
              .map((queId) => (
                <Link key={queId} to={`/questions/${queId}`}>
                  <Question queId={queId} questions={questions} />
                </Link>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </QuestionsWrapper>
  );
};
export default Questions;
