import React from "react";
import { Link, Route } from "react-router-dom";
import { Container, Navbar, Card } from "react-bootstrap";

const AuthRoute = (props) => {
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      <main className={"d-flex align-items-center py-4"} style={{ minHeight: "100vh" }}>
        <Container
          style={{
            maxWidth: "600px",
          }}
        >
          <Card>
            <Card.Body>
              <div className={"text-center mb-4"}>
                <Navbar.Brand as={Link} to={"/"} className={"text-primary me-0"}>
                  Would You Rather...
                </Navbar.Brand>
              </div>

              {children}
            </Card.Body>
          </Card>
        </Container>
      </main>
    </Route>
  );
};

export default AuthRoute;
