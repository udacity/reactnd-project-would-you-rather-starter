import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../actions/authedUser";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Errror404 from "../assets/not-on-map.png";

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notfound-bg {
    width: 70%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Errror404});
    background-position: top;
  }
`;

const NotFound = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function routeToSignIn(e) {
    e.preventDefault();
    dispatch(logOut());
    history.replace("/signin");
  }
  return (
    <NotFoundWrapper>
      <h1>Oops! You missed your way</h1>
      <button onClick={routeToSignIn}>Back to sign in</button>
      <div className="notfound-bg"></div>
    </NotFoundWrapper>
  );
};
export default NotFound;
