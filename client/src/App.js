import { Fragment, useState, useEffect } from "react";
import ListBeer from "./components/ListBeer.jsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
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
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/listbeer" element={<ListBeer setAuth={setAuth} />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
