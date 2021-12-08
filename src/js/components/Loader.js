import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div className={"position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center bg-white"}>
    <Spinner animation={"grow"} role={"status"}>
      <span className={"visually-hidden"}>Loading...</span>
    </Spinner>
  </div>
);

export default Loader;
