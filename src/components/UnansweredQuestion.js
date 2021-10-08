import React from "react";
import { useDispatch } from "react-redux";
import { saveAnswer } from "../actions/questions";

const UnansweredQuestion = ({ questions, question_id, authedUser }) => {
  const dispatch = useDispatch();

  function showOption(e) {
    e.preventDefault();
    console.log("Hello");
    dispatch(saveAnswer(authedUser.id, question_id, e.target.value));
    console.log("hi there");
  }
  return (
    <div className="options">
      <div className="option option--one">
        <p className="option__text">{questions[question_id].optionOne.text}</p>
        <button value="optionOne" onClick={showOption} className="vote--btn">
          vote
        </button>
      </div>
      <div className="option option--two">
        <p className="option__text">{questions[question_id].optionTwo.text}</p>
        <button value="optiontwo" onClick={showOption} className="vote--btn">
          vote
        </button>
      </div>
    </div>
  );
};
export default UnansweredQuestion;
