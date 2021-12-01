import React from "react";
import { Route } from "react-router-dom";

const AuthRoute = (props) => {
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      <div>Test</div>
      {children}
    </Route>
  );
};

export default AuthRoute;
