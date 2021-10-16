import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authUser } from "../actions/authedUser";
import { fetchUsers } from "../actions/users";
import styled from "styled-components";

const SignWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const SignInCard = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border-radius: 3px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  * {
    width: 50%;
    padding: 10px 20px;
  }
  select {
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;
    color: #272727;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    background-color: #00d4ff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  }
`;

function SignIn() {
  const [id, setId] = useState("");
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users.users);
  const usersId = Object.keys(users);

  function handleAuthUser() {
    dispatch(authUser(users[id]));
    if (authedUser) {
      history.replace("/");
    }
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <SignWrapper>
      <h1>Would You Rather?</h1>
      <p>Kindly Sign In to play</p>
      <SignInCard>
        <select onChange={(e) => setId(e.target.value)}>
          <option value="">Select User</option>
          {usersId.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <button onClick={handleAuthUser}>Sign In</button>
      </SignInCard>
    </SignWrapper>
  );
}

export default SignIn;
