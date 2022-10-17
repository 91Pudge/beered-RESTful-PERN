import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

  const logOut = () => {
    localStorage.removeItem("token");
    toast.error("Logged out");
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />
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
