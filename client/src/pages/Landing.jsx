import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <div className="jumbotron mt-3  text-center">
      <h1>Welcome to Beered, the craft beer user review site</h1>
      <p id="landing-message">Sign in to start reviewing beer</p>
      <button className="mr-2 mb-20">
        {" "}
        <Link to="login">Login</Link>
      </button>
      <button>
        <Link to="register">Register</Link>
      </button>
      <div id="beer-container">
        <div className="mt-5" id="mug">
          <div id="beer"></div>
          <div class="bubbles top-glass-bubble-1"></div>
          <div class="bubbles top-glass-bubble-2"></div>
          <div class="bubbles top-glass-bubble-3"></div>
          <div class="bubbles top-glass-bubble-4"></div>
          <div class="bubbles top-air-bubble-1"></div>
          <div class="bubbles top-air-bubble-2"></div>
          <div class="bubbles vertical-glass-bubble-1"></div>
          <div class="bubbles vertical-glass-bubble-2"></div>
          <div class="inner-bubbles inner-bubble-1"></div>
          <div class="inner-bubbles inner-bubble-2"></div>
          <div class="inner-bubbles inner-bubble-3"></div>
          <div class="inner-bubbles inner-bubble-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
