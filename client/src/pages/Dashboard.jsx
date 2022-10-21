import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./style.css";

const Dashboard = ({ setAuth }) => {
  const [beer_name, setBeer_name] = useState("");
  const [beered, setBeered] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const beers = await fetch(
        `http://localhost:5000/beered/?beer_name=${beer_name}`
      );
      const parseRes = await beers.json();
      setBeered(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />

      <form onSubmit={onSubmitForm}>
        <h1 id="submit">🔍</h1>{" "}
        <input
          type="text"
          name="beer_name"
          placeholder="Search for a beer"
          value={beer_name}
          onChange={(e) => setBeer_name(e.target.value)}
        />
      </form>

      <div id="card">
        {beered
          .slice()
          .reverse()
          .map((beers, i) => (
            <div id="search" key={i}>
              <div id="beer_title">
                <p id="name">
                  <b>{beers.beer_name}</b>
                </p>
              </div>
              <h3>
                <u>Brewery</u> {beers.brewery_name}
              </h3>

              <h3>
                <u>Beer style:</u> {beers.style}
              </h3>
              <h3>
                <u>Description:</u> {beers.descriptions}
              </h3>
            </div>
          ))}
        <div className="text-center">
          <p> Don't see the beer you're looking for?</p>

          <Link to="/listbeer">
            {" "}
            <p id="add">Add it here</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
