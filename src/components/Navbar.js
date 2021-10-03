import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    width: 30%;
    display: flex;
    justify-content: space-evenly;
  }
  a:link,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  .logout {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function Navbar() {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  useEffect(() => {
    console.log(authedUser);
  });
  return (
    <NavWrapper>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/leaderboard">Leaderbord</Link>
        <Link to="/newpoll">Create Poll</Link>
      </div>
      <div className="user-profile">
        <div>{/* <img src={authedUser.avatarURL} alt="user pic" /> */}</div>
        <p>Username</p>
      </div>
      <Link className="logout" to="/signin">
        Logout
      </Link>
    </NavWrapper>
  );
}
export default Navbar;
