import { Fragment, useState } from "react";
import ListBeer from "./components/ListBeer.jsx";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
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
