import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";

// Settings
import navigation from "../../settings/navigation";
import { deleteSelectedUser } from "../../store/users/actions";

// ./Settings

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedUser = useSelector((state) => state.users?.selected);

  // Handlers
  const handleLogOut = () => {
    dispatch(deleteSelectedUser());
    history.push("/sign-in");
  };
  // ./Handlers

  return (
    <Navbar bg={"light"} expand={"md"}>
      <Container>
        <Navbar.Brand as={Link} to={"/questions"} className={"text-primary"}>
          Would You Rather...
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
        <Navbar.Collapse id={"basic-navbar-nav"}>
          <Nav className={"me-auto"}>
            {navigation.map((el) => (
              <Nav.Link as={NavLink} key={el.id} to={el.url} activeClassName={"active"} exact>
                {el.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <div className={"fs-6 px-3 mb-0"}>
          <Image src={selectedUser?.avatarURL} width={"40"} height={"40"} roundedCircle className={"border border-2 border-white me-2"} />
          Hello, {selectedUser?.name}
        </div>
        <Button type={"button"} onClick={handleLogOut}>
          Sign Out
        </Button>
      </Container>
    </Navbar>
  );
};

export default connect(null, { deleteSelectedUser })(Header);
