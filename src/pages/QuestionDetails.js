import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .options {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 3px;
    overflow-y: hidden;
    .option {
      position: relative;
      width: 50%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .vote--btn {
        cursor: pointer;
        width: 50%;
        padding: 10px;
      }
    }
    .option__text {
      font-weight: bold;
      text-transform: uppercase;
    }
    .option--one {
      background-color: #249cff;
    }
    .option--two {
      background-color: #ff0000;
      color: #fff;
    }
  }

  .user-profile > img {
    border-radius: 50%;
    margin-top: 5px;
  }
`;

const Marker = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: green;

  border-radius: 50%;
`;

const QuestionDetails = () => {
  const { question_id } = useParams();
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const questions = useSelector((state) => state.questions.questions);
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    console.log(questions, question_id, questions[question_id]);
  });

  return (
    <div>
      <Navbar />
      <DetailsWrapper>
        <h2>Would You Rather...?</h2>
        {/* If LoggedInUser has voted:
            just show Details of vote

        else:
            make voting possible */}

        {questions[question_id].optionOne.votes.includes(authedUser.id) ||
        questions[question_id].optionTwo.votes.includes(authedUser.id) ? (
          <div className="options">
            <div className="option option--one">
              {questions[question_id].optionOne.votes.includes(
                authedUser.id
              ) ? (
                <Marker>✔</Marker>
              ) : (
                ""
              )}
              <p className="option__text">
                {questions[question_id].optionOne.text}
              </p>

              <p>
                {questions[question_id].optionOne.votes.length}{" "}
                {questions[question_id].optionTwo.votes.length <= 1
                  ? " person "
                  : " people "}
                voted this option
              </p>
              <p>
                {(questions[question_id].optionOne.votes.length /
                  (questions[question_id].optionOne.votes.length +
                    questions[question_id].optionTwo.votes.length)) *
                  100}
                % of the people voted this option
              </p>
            </div>
            <div className="option option--two">
              {questions[question_id].optionTwo.votes.includes(
                authedUser.id
              ) ? (
                <Marker>✔</Marker>
              ) : (
                ""
              )}
              <p className="option__text">
                {questions[question_id].optionTwo.text}
              </p>

              <p>
                {questions[question_id].optionTwo.votes.length}
                {questions[question_id].optionTwo.votes.length <= 1
                  ? " person "
                  : " people "}
                voted this option
              </p>
              <p>
                {(questions[question_id].optionTwo.votes.length /
                  (questions[question_id].optionTwo.votes.length +
                    questions[question_id].optionOne.votes.length)) *
                  100}
                % of the people voted this option
              </p>
            </div>
          </div>
        ) : (
          <div className="options">
            <div className="option option--one">
              <p className="option__text">
                {questions[question_id].optionOne.text}
              </p>
              <button className="vote--btn">vote</button>
            </div>
            <div className="option option--two">
              <p className="option__text">
                {questions[question_id].optionTwo.text}
              </p>
              <button className="vote--btn">vote</button>
            </div>
          </div>
        )}
        <small>Posted by:</small>
        <div className="user-profile">
          <img
            width="40"
            height="40"
            src={users[questions[question_id].author].avatarURL}
            alt="user pic"
          />
        </div>
      </DetailsWrapper>
    </div>
  );
};

export default QuestionDetails;
