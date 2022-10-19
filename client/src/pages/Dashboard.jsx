import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./style.css";

const Dashboard = ({ setAuth }) => {
  const [details, setDetails] = useState([]);
  const [beer_name, setBeer_name] = useState("");
  const [beered, setBeered] = useState([]);

  const getName = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await res.json();
      setDetails(parseRes);
    } catch (error) {
      console.log(error);
    }
  };

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

  let data = Object.values(details);
  useEffect(() => {
    getName();
  }, []);

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
      <div id="welcome">
        <p>Welcome- </p>
        {data[1]}
        <div id="email">
          <p>{data[2]}</p>
        </div>
      </div>
      <div id="card">
        {beered
          .slice()
          .reverse()
          .map((beers, i) => (
            <div id="search" key={i}>
              <div id="beer_title">
                <p>{beers.beer_name}</p>
              </div>

              <p>{beers.brewery_name}</p>
              <h3>{beers.style}</h3>
              <p>Description</p>
              <h3>{beers.description}</h3>
            </div>
          ))}
        <div className="text-center">
          <p>Don't see the beer you're looking for? </p>

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
