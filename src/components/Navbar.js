import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

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
  a:visited,
  a:active {
    color: inherit;
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
  .logout {
    margin-left: 10px;
    margin-right: 10px;
    font-size: smaller;
  }
  .curent {
    padding: 5px 10px;
    background-color: #fff;
  }
`;

function Navbar() {
  const authedUser = useSelector((state) => state.authedUser.authedUser);

  return (
    <NavWrapper>
      <div className="links">
        <NavLink activeClassName="current" to="/home">
          Home
        </NavLink>
        <NavLink activeClassName="current" to="/leaderboard">
          Leaderbord
        </NavLink>
        <NavLink activeClassName="current" to="/newpoll">
          Create Poll
        </NavLink>
      </div>
      <div className="user-profile">
        <img width="40" height="40" src={authedUser.avatarURL} alt="user pic" />

        <p>{authedUser.id}</p>
      </div>
      <Link className="logout" to="/signin">
        Logout
      </Link>
    </NavWrapper>
  );
}
export default Navbar;
