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
      const res = await fetch("http://localhost:5000/dashboard", {
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
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
        <a className="navbar-brand" href="/dashboard">
          Beered
        </a>
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
              <a className="nav-link" href="/listbeer">
                Review a beer <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/user-reviews">
                User Reviews <span className="sr-only">(current)</span>
              </a>
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
