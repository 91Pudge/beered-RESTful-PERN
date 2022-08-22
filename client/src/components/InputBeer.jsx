import React, { Fragment } from "react";
import "./Input.css";

const Input = () => {
  return (
    <Fragment>
      <h1>Beered.co.jp</h1>
      <form>
        <div className="flex-input">
          <div className="input-card">
            <article>
              <p>BEER NAME:</p>
              <input></input>
              <br />
              <p>BREWERY NAME:</p>
              <input></input>
              <br />
              <p>STYLE:</p>
              <input></input>
              <br />
              <p>DESCRIPTION:</p>
              <input></input>
              <br />
              <br />
              <button>Submit</button>
            </article>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Input;
