import "../../components/ListBeer.css";
import NavBar from "../../components/NavBar";
import React, { useState, useEffect, Fragment } from "react";

import Edit from "./Edit";

const List = ({ setAuth }) => {
  const [des, setDes] = useState([]);
  const [review, setReview] = useState("");
  const getter = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const data = await res.json();
      if (data[0].review_id === null) {
        return setReview("You have not reviewed any beer!");
      }
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
      const fil = await des.filter((item) => item.review_id !== id);
      window.location.href = "/user-reviews";
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
        <h1>{review}</h1>
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
                    <u>Beer description</u>:&nbsp;
                    <br />
                    <b>{de.descriptions}</b>
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
