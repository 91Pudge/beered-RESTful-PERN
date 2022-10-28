import { Fragment, useState, useEffect } from "react";
import ListBeer from "./components/ListBeer.jsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userreviews from "./pages/Userreviews.jsx";

function App() {
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Fragment>
      <ToastContainer
        theme="dark"
        autoClose={1000}
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Landing setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? (
                <Register setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/user-reviews"
            element={isAuthenticated ? <Userreviews setAuth={setAuth} /> : null}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/listbeer"
            element={isAuthenticated ? <ListBeer setAuth={setAuth} /> : null}
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
