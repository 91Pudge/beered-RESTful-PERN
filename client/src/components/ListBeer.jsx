import "./ListBeer.css";
import React, { useState, useEffect, Fragment } from "react";
import Input from "./InputBeer";
import EditBeer from "./EditBeer";
import NavBar from "./NavBar";

const ListBeer = ({ setAuth }) => {
  const [des, setDes] = useState([]);
  const getter = async () => {
    try {
      const res = await fetch("http://localhost:5000/beer", {
        method: "GET"
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
      <Input />
      <div>
        {des
          .slice()
          .reverse()
          .map((de) => (
            <article key={de.review_id}>
              <div className="card w-7/12 mx-auto rounded">
                <div className="mt-2">
                  <p>Beer name:</p>
                  {de.beer_name}
                </div>
                <div className="mt-2">
                  <p>Brewery name: </p>
                  {de.brewery_name}
                </div>
                <div className="mt-2">
                  <p>Style: </p>
                  {de.style}
                </div>
                <div className="mt-2 mb-2">
                  <p>Beer description: </p>
                  {de.descriptions}
                </div>
                <button
                  className="mx-auto"
                  onClick={() => Delete(de.review_id)}
                >
                  Delete
                </button>
                <EditBeer de={de} />
              </div>
            </article>
          ))}
      </div>
    </Fragment>
  );
};

export default ListBeer;
