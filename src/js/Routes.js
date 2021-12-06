import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

// Settings
import { fetchUsers, setSelectedUser } from "./store/users/actions";
import { fetchQuestions } from "./store/questions/actions";
// ./Settings

// Layouts
import DefaultRoute from "./layouts/default";
import AuthRoute from "./layouts/auth";
// ./Layouts

// Pages
import SignIn from "./pages/sign-in";
import Questions from "./pages/questions";
import SingleQuestion from "./pages/single-question";
import AddNewQuestion from "./pages/add-new-question";
import LeadersBoard from "./pages/leaders-board";

// ./Pages

function Routes() {
  const dispatch = useDispatch();

  // Handlers
  const isLoggedIn = () => !!localStorage.getItem("udacity-would-you-rather--current-user");
  // ./Handlers

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(fetchUsers());
      dispatch(setSelectedUser(JSON.parse(localStorage.getItem("udacity-would-you-rather--current-user")).id));
      dispatch(fetchQuestions());
    }
  }, []);

  return (
    <Router>
      {!isLoggedIn() && <Redirect to="/sign-in" />}
      <AuthRoute path={"/sign-in"} exact>
        <SignIn />
      </AuthRoute>
      <DefaultRoute path={"/"} exact>
        <Questions />
      </DefaultRoute>
      <DefaultRoute path={"/questions/:id"} exact>
        <SingleQuestion />
      </DefaultRoute>
      <DefaultRoute path={"/add"} exact>
        <AddNewQuestion />
      </DefaultRoute>
      <DefaultRoute path={"/leaderboard"} exact>
        <LeadersBoard />
      </DefaultRoute>
    </Router>
  );
}

export default connect(null, {
  fetchUsers,
  setSelectedUser,
  fetchQuestions,
})(Routes);
