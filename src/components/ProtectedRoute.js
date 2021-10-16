import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function ProtectedRoute({ component: Component, ...restofProps }) {
  const authedUser = useSelector((state) => state.authedUser.authedUser);

  return (
    <Route
      {...restofProps}
      render={(props) =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}
export default ProtectedRoute;
