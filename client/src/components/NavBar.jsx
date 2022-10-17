import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = ({ setAuth }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    toast.error("Logged out");
    setAuth(false);
  };

  return (
    <div className="mb-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
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
            <Link to="/login">
              <button className="w-16 mt-2" onClick={() => logOut()}>
                logout
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
