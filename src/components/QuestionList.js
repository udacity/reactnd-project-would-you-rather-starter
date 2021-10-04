import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questions";
import Question from "../components/Question";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styled from "styled-components";

const QuestionsWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tab-container {
    width: 50%;
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
              .map((queId) => (
                <Question key={queId} queId={queId} questions={questions} />
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
              .map((queId) => (
                <Question key={queId} queId={queId} questions={questions} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </QuestionsWrapper>
  );
};
export default Questions;
