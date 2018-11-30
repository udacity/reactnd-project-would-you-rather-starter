import React from "react";
import "./PageTitle.scss";

export default function PageTitle({ children, ...rest }) {
  return (
    <h1 className="is-center" {...rest}>
      {children}
    </h1>
  );
}
