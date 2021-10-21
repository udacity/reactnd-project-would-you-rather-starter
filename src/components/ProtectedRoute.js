import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, withRouter } from "react-router";

function ProtectedRoute({ component: Component, ...restofProps }) {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const history = useHistory();

  return (
    <Route
      {...restofProps}
      render={(props) =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          history.replace(`/signin`)
        )
      }
    />
  );
}
export default withRouter(ProtectedRoute);
