import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Sardines.css";

function Sardines() {
  return (
    <div
      className="Sardines"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/l41m63eRmHknmSVEs/giphy.gif)"
      }}>
      <Message>
        <h1>you don't eat the sardines. the sardines, they eat you!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Sardines;
