import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../actions/authedUser";
import { useLocation, useHistory, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import AnsweredQuestion from "../components/AnsweredQuestion";
import UnansweredQuestion from "../components/UnansweredQuestion";
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

export const Marker = styled.span`
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
  const question = questions[question_id];
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  //throw new Error("Page not found");
  useEffect(() => {
    if (!question) {
      dispatch(logOut());
      return history.replace(`/signin?next=questions/bad_id`);
    }
  }, [dispatch, history, location.pathname, question]);

  return (
    <div>
      <Navbar />
      {question && (
        <DetailsWrapper>
          <h2>Would You Rather...?</h2>

          {question.optionOne.votes.includes(authedUser.id) ||
          question.optionTwo.votes.includes(authedUser.id) ? (
            <AnsweredQuestion
              questions={questions}
              question_id={question_id}
              authedUser={authedUser}
            />
          ) : (
            <UnansweredQuestion question_id={question_id} />
          )}
          <small>Posted by:</small>
          <div className="user-profile">
            <img
              width="40"
              height="40"
              src={users[question.author].avatarURL}
              alt="user pic"
            />
          </div>
        </DetailsWrapper>
      )}
    </div>
  );
};

export default QuestionDetails;
