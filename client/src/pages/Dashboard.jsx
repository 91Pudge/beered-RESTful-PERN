import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./style.css";

const Dashboard = ({ setAuth }) => {
  const [beer_name, setBeer_name] = useState("");
  const [noBeer, setNoBeer] = useState("");
  const [beered, setBeered] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const beers = await fetch(
        `http://localhost:5000/beered/?beer_name=${beer_name}`
      );
      const parseRes = await beers.json();
      if (parseRes.length === 0) {
        setNoBeer("Don't see the beer you're looking for?");
      }
      setBeered(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />
      <div>
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

        <div>
          {beered
            .slice()
            .reverse()
            .map((beers, i) => (
              <div className="card w-7/12 mx-auto rounded" key={i}>
                <div className="mt-2">
                  <p>Beer name:</p>
                  {beers.beer_name}
                </div>
                <div className="mt-2">
                  <p>Brewery name: </p>
                  {beers.brewery_name}
                </div>
                <div className="mt-2">
                  <p>Style: </p>
                  {beers.style}
                </div>
                <div className="mt-2 mb-2">
                  <p>Beer description: </p>
                  {beers.descriptions}
                </div>
              </div>
            ))}
          <div id="beer-warning">
            {noBeer}

            <Link to="/listbeer">
              {" "}
              <p id="add">Add a beer review</p>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
