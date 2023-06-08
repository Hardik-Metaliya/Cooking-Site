import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="Error">
      <h2>404</h2>
      <h3>Page You Are Looking For Does Not Exist </h3>
      <div className="Error-home-btn">
        <Link to="/">Home &rarr;</Link>
      </div>
    </div>
  );
};

export default Error;
