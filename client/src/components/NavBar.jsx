import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const NavBar = ({ setAuth }) => {
  const [name, setName] = useState("");

  const logOut = () => {
    localStorage.removeItem("token");
    toast.error("Logged out");
    setAuth(false);
  };

  const getProfile = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
        <Link className="navbar-brand" to="/dashboard">
          Beered
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/listbeer">
                Review beer <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/user-reviews">
                {name}'s reviews <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        Welcome- {name}
        <Link to="/login">
          <button className="w-16 mt-2 ml-2" onClick={() => logOut()}>
            logout
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
