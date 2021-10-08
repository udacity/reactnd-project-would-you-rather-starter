import React from "react";
import { useDispatch } from "react-redux";
import { saveAnswer } from "../actions/questions";

const UnansweredQuestion = ({ questions, question_id, authedUser }) => {
  const authedUserId = authedUser.id;
  const dispatch = useDispatch();

  function voteOption(e) {
    e.preventDefault();
    const answerObject = {
      authedUser: authedUserId,
      qid: question_id,
      answer: e.target.value,
    };

    console.log(e.target.value);
    dispatch(saveAnswer(answerObject));
    console.log("hi there");
  }
  return (
    <div className="options">
      <div className="option option--one">
        <p className="option__text">{questions[question_id].optionOne.text}</p>
        <button value="optionOne" onClick={voteOption} className="vote--btn">
          vote
        </button>
      </div>
      <div className="option option--two">
        <p className="option__text">{questions[question_id].optionTwo.text}</p>
        <button value="optiontwo" onClick={voteOption} className="vote--btn">
          vote
        </button>
      </div>
    </div>
  );
};
export default UnansweredQuestion;
