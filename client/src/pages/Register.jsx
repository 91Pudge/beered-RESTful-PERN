import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });
  const { email, name, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { email, password, name };
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1>Register</h1>
      <form className="p-5 text-center w-50 mx-auto" onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-control my-3 text-center"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control my-3 text-center"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
          title="6 charaters minimum length"
          required=""
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          className="form-control my-3 text-center"
          value={name}
          onChange={(e) => onChange(e)}
          min="2"
          required=""
        />
        <button>Submit</button>
        <br />
        <button>
          <Link to="/login">Login</Link>
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
