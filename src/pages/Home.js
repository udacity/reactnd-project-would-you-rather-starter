import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import Navbar from "../components/Navbar";
import Questions from "../components/QuestionList";

const Home = () => {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  useEffect(() => {
    if (!authedUser) {
      history.replace("/signin");
    }
  });
  return (
    <div>
      <Navbar />
      <Questions />
    </div>
  );
};
export default Home;
