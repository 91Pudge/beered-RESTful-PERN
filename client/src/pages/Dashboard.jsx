import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Dashboard = ({ setAuth }) => {
  const [beer_name, setBeer_name] = useState("");
  const [noBeer, setNoBeer] = useState("");
  const [beered, setBeered] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (beer_name === "") {
      return setNoBeer("Use the search box above to search for a beer.");
    }
    try {
      const beers = await fetch(
        `http://localhost:5000/beered/?beer_name=${beer_name}`
      );
      const parseRes = await beers.json();
      if (parseRes.length === 0) {
        return setNoBeer("We couldn't find a beer review");
      }
      setBeered(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />
      <div id="beer-warning">
        <b>{noBeer}</b>

        <Link to="/listbeer">
          {" "}
          <p id="add">Add a beer review</p>
        </Link>
      </div>
      <div>
        <form onSubmit={onSubmitForm}>
          <h1 id="submit">🔍</h1>{" "}
          <input
            id="search"
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
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
