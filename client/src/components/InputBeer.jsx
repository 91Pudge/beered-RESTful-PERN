import React, { Fragment } from "react";
import "./Input.css";

const Input = () => {
  return (
    <Fragment>
      <h1>Beered.co.jp</h1>
      <div className="input-card">
        BEER NAME:
        <input></input>
        BREWERY NAME:
        <input></input>
        STYLE:
        <input></input>
        DESCRIPTIONS
        <input></input>
      </div>
    </Fragment>
  );
};

export default Input;

// review_id SERIAL PRIMARY KEY,
// beer_name VARCHAR(255),
// brewery_name VARCHAR(255),
// style VARCHAR(255),
// descriptions VARCHAR(255)
