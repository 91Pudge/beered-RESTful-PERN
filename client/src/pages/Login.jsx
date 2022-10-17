import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);

      if (!parseRes.token) {
        toast.error(parseRes);
      } else {
        toast.success("You logged in");
      }
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="/login">
          Beered
        </a>
      </nav>
      <form
        className=" flex-row p-5 text-center w-50 mx-auto"
        onSubmit={onSubmitForm}
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-control my-3 text-center"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control my-3 text-center"
          value={password}
          minLength="6"
          title="6 charaters minimum length"
          onChange={(e) => onChange(e)}
        />
        <button>Login</button>
        <br />

        <Link to="/register">Register</Link>
      </form>
    </Fragment>
  );
};

export default Login;
