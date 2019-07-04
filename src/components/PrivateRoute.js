import React from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isEmptyObject } from '../utils';

export default function PrivateRoute({ component:Component, loggedInUser={}, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isEmptyObject(loggedInUser) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: props.location}
            }}
          />
        )
      }}
    />
  );
}
