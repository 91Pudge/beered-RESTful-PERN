import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="jumbotron mt-5 text-center">
      <h1>Welcome to Beered, the craft beer user review site</h1>
      <p>Sign in to start reviewing beer</p>
      <button className="mr-2">
        {" "}
        <Link to="login">Login</Link>
      </button>
      <button>
        <Link to="register">Register</Link>
      </button>
    </div>
  );
};

export default Landing;
