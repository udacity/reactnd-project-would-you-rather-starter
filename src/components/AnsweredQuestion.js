import React from "react";
import { useSelector } from "react-redux";
import { Marker } from "../pages/QuestionDetails";

const AnsweredQuestion = ({ question_id }) => {
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const question = questions[question_id];
  return (
    <div className="options">
      <div className="option option--one">
        {question.optionOne.votes.includes(authedUser.id) ? (
          <Marker>✔</Marker>
        ) : (
          ""
        )}
        <p className="option__text">{question.optionOne.text}</p>

        <p>
          {question.optionOne.votes.length}{" "}
          {question.optionTwo.votes.length <= 1 ? " person " : " people "}
          voted this option
        </p>
        <p>
          {Math.round(
            (question.optionOne.votes.length /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)) *
              100
          )}
          % of the people voted this option
        </p>
      </div>
      <div className="option option--two">
        {question.optionTwo.votes.includes(authedUser.id) ? (
          <Marker>✔</Marker>
        ) : (
          ""
        )}
        <p className="option__text">{question.optionTwo.text}</p>

        <p>
          {question.optionTwo.votes.length}
          {question.optionTwo.votes.length <= 1 ? " person " : " people "}
          voted this option
        </p>
        <p>
          {Math.round(
            (question.optionTwo.votes.length /
              (question.optionTwo.votes.length +
                question.optionOne.votes.length)) *
              100
          )}
          % of the people voted this option
        </p>
      </div>
    </div>
  );
};
export default AnsweredQuestion;
