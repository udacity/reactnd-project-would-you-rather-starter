import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { logOut } from "../actions/authedUser";

const NavWrapper = styled.nav`
  width: 100vw;
  height: 12vh;
  color: #fff;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div.links {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
  }
  a:link,
  a:visited {
    padding: 7px 20px;
    color: #fff;
    text-decoration: none;
  }
  .user-profile {
    height: 50px;
    width: 10%;
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  button.logout {
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    font-size: smaller;
    color: #fff;
    background-color: #272727;
    border: none;
  }
  a.current {
    background-color: #fff;
    color: #272727;
    border-radius: 16px;
  }
`;

function Navbar() {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    dispatch(logOut());
    if (!authedUser) {
      history.replace("/signin");
    }
  }

  return (
    <NavWrapper>
      <div className="links">
        <NavLink exact activeClassName="current" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="current" to="/leaderboard">
          Leaderboard
        </NavLink>
        <NavLink activeClassName="current" to="/add">
          Create Poll
        </NavLink>
      </div>

      <div className="user-profile">
        {authedUser && (
          <>
            <img
              width="40"
              height="40"
              src={authedUser.avatarURL}
              alt="user pic"
            />

            <p>{authedUser.id}</p>
          </>
        )}
      </div>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </NavWrapper>
  );
}
export default Navbar;
