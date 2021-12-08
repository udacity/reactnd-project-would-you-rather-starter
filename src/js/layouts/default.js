import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from "./components/header";

// ./Components

function DefaultRoute(props) {
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      <Header />

      <main className={"py-4"}>
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
}

export default DefaultRoute;
