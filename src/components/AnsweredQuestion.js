import React from "react";
import { Marker } from "../pages/QuestionDetails";

const AnsweredQuestion = ({ questions, question_id, authedUser }) => (
  <div className="options">
    <div className="option option--one">
      {questions[question_id].optionOne.votes.includes(authedUser.id) ? (
        <Marker>✔</Marker>
      ) : (
        ""
      )}
      <p className="option__text">{questions[question_id].optionOne.text}</p>

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
      {questions[question_id].optionTwo.votes.includes(authedUser.id) ? (
        <Marker>✔</Marker>
      ) : (
        ""
      )}
      <p className="option__text">{questions[question_id].optionTwo.text}</p>

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
);
export default AnsweredQuestion;
