import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Error = () => (
  <Card bg={"danger"} text={"white"}>
    <Card.Body className={"text-center"}>
      <h1 className={"mb-4"}>404</h1>
      <h4 className={"mb-4"}>Page not found :(</h4>
      <Button as={Link} variant={"warning"} size={"lg"} to={"/"}>
        Go to the Home Page ->
      </Button>
    </Card.Body>
  </Card>
);

export default Error;
