import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
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
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="text-center mb-10">
        <h1> Welcome - {name}</h1>
      </div>
      <div className="mx-auto text-center">
        <Link to="/listbeer">
          <button>Post a review</button>
        </Link>
        <br />
        <button onClick={(e) => logOut(e)}>Log out</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
