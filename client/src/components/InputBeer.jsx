import React, { Fragment, useState } from "react";
import EditBeer from "./EditBeer.jsx";
import "./Input.css";

const InputBeer = () => {
  const [beer_name, setBeer_name] = useState("");
  const [brewery_name, setBrewery_name] = useState("");
  const [style, setStyle] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { beer_name, brewery_name, style, descriptions };
    try {
      await fetch("http://localhost:5000/beer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1>Beered.co.jp</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex-input">
          <div className="input-card">
            <article>
              <header>Add Beer:</header>
              <p>BEER NAME:</p>
              <input
                value={beer_name}
                onChange={(e) => setBeer_name(e.target.value)}
              ></input>
              <br />
              <p>BREWERY NAME:</p>
              <input onChange={(e) => setBrewery_name(e.target.value)}></input>
              <br />
              <p>STYLE:</p>
              <input onChange={(e) => setStyle(e.target.value)}></input>
              <br />
              <p>DESCRIPTION:</p>
              <input onChange={(e) => setDescriptions(e.target.value)}></input>
              <br />
              <br />
              <button>Submit</button>
              <EditBeer />
            </article>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputBeer;
