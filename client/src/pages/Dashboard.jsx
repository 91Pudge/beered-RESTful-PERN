import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../components/NavBar";
import "./style.css";

const Dashboard = ({ setAuth }) => {
  const [UserName, setUserName] = useState("");
  const [beer_name, setBeer_name] = useState("");
  const [beered, setBeered] = useState([]);

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json();
      setUserName(parseRes.user_name);
    } catch (error) {
      console.error(error.message);
    }
  }

  const logOut = () => {
    localStorage.removeItem("token");
    toast.error("Logged out");
    setAuth(false);
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

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />
      <div className="text-center mb-10">
        <h1> Welcome - {UserName}</h1>
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="beer_name"
          placeholder="Search for a beer"
          value={beer_name}
          onChange={(e) => setBeer_name(e.target.value)}
        />
      </form>
      <button id="submit">Submit</button>
      <div id="card">
        {beered.map((beers, i) => (
          <div id="search" key={i}>
            <h3>Beer Name- {beers.beer_name}</h3>
            <h3>Brewery Name- {beers.brewery_name}</h3>
            <h3>Style- {beers.style}</h3>
            <h3>Description- {beers.description}</h3>
          </div>
        ))}
      </div>
      {beered.length <= 0 && <p>no results</p>}
    </Fragment>
  );
};

export default Dashboard;
