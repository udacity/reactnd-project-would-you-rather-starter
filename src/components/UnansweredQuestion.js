import React from "react";

const UnansweredQuestion = ({ questions, question_id }) => (
  <div className="options">
    <div className="option option--one">
      <p className="option__text">{questions[question_id].optionOne.text}</p>
      <button className="vote--btn">vote</button>
    </div>
    <div className="option option--two">
      <p className="option__text">{questions[question_id].optionTwo.text}</p>
      <button className="vote--btn">vote</button>
    </div>
  </div>
);
export default UnansweredQuestion;
