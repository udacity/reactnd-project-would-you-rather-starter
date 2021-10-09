import React from "react";
import { useDispatch } from "react-redux";
import { saveAnswer } from "../actions/questions";

const UnansweredQuestion = ({ questions, question_id, authedUser }) => {
  const authedUserId = authedUser.id;
  const qid = question_id;
  const question = questions[question_id];
  const dispatch = useDispatch();

  function voteOption(e) {
    e.preventDefault();
    let answer = e.target.value;

    console.log(typeof authedUserId, qid, answer);
    dispatch(saveAnswer({ authedUser: authedUserId, qid, answer }));
    console.log("hi there");
  }
  return (
    <div className="options">
      <div className="option option--one">
        <p className="option__text">{question.optionOne.text}</p>
        <button value="optionOne" onClick={voteOption} className="vote--btn">
          vote
        </button>
      </div>
      <div className="option option--two">
        <p className="option__text">{question.optionTwo.text}</p>
        <button value="optiontwo" onClick={voteOption} className="vote--btn">
          vote
        </button>
      </div>
    </div>
  );
};
export default UnansweredQuestion;
