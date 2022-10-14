import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (error) {
      console.error(error.message);
    }
  }

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <Fragment>
      <h1>Dashboard </h1>
      <div className="text-center mb-10">
        <h2> Welcome - {name}</h2>
      </div>
      <div className="mx-auto text-center">
        <button>
          <Link to="/listbeer">Click here to post a review</Link>
        </button>
        <br />
        <button onClick={(e) => logOut(e)}>Log out</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
