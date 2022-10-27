import "/Users/josh/Desktop/beered-RESTful-PERN/client/src/components/ListBeer.css";
import React, { useState, useEffect, Fragment } from "react";
import NavBar from "/Users/josh/Desktop/beered-RESTful-PERN/client/src/components/NavBar.jsx";
import Edit from "./Edit";

const List = ({ setAuth }) => {
  const [des, setDes] = useState([]);
  const getter = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const data = await res.json();
      setDes(data);
    } catch (error) {
      console.log(error);
    }
  };
  const Delete = async (id) => {
    try {
      await fetch(`http://localhost:5000/beer/${id}`, {
        method: "DELETE"
      });
      const fil = des.filter((item) => item.review_id !== id);
      setDes(fil);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getter();
  }, []);

  return (
    <Fragment>
      <NavBar setAuth={setAuth} />
      <div>
        <h1>My reviews</h1>
        {des
          .slice()
          .reverse()
          .map((de) => (
            <article key={de.review_id}>
              <div className="card mx-auto">
                <div className="flex flex-col">
                  <p>
                    <u>Beer name:</u>&nbsp;
                    <b>{de.beer_name}</b>
                  </p>
                  <p>
                    <u>Brewery name:</u>&nbsp;
                    <b> {de.brewery_name} </b>
                  </p>
                  <p>
                    <u>Style:</u>&nbsp;
                    <b>{de.style} </b>
                  </p>
                  <p>
                    <div>
                      <u>Beer description</u>:&nbsp;
                      <br />
                      <b>{de.descriptions}</b>
                    </div>
                  </p>
                </div>
                <button
                  className="mx-auto"
                  onClick={() => Delete(de.review_id)}
                >
                  Delete
                </button>
                <Edit de={de} />
              </div>
            </article>
          ))}
      </div>
    </Fragment>
  );
};

export default List;
