import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const ErrorRoute = (props) => {
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      <main className={"d-flex align-items-center py-4"} style={{ minHeight: "100vh" }}>
        <Container
          style={{
            maxWidth: "600px",
          }}
        >
          {children}
        </Container>
      </main>
    </Route>
  );
};

export default ErrorRoute;
