import "./ListBeer.css";
import React, { useState, useEffect, Fragment } from "react";
import Input from "./InputBeer";
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
              <div className="card w-7/12 mx-auto">
                <div className="flex flex-col">
                  <p>
                    <b>
                      <u>Beer name:</u>&nbsp;
                    </b>
                    <b>{de.beer_name}</b>
                  </p>
                  <p>
                    <b>
                      <u>Brewery name:</u>&nbsp;
                    </b>
                    <b> {de.brewery_name} </b>
                  </p>
                  <p>
                    <b>
                      <u>Style:</u>&nbsp;
                    </b>
                    <b>{de.style} </b>
                  </p>
                  <p>
                    <div>
                      <b>
                        {" "}
                        <u>Beer description</u>&nbsp;
                      </b>
                      <br />
                      <b>{de.descriptions}</b>
                    </div>
                  </p>
                </div>
                <img alt="pint of beer" id="image1" src="images/beer1.webp" />
              </div>
            </article>
          ))}
      </div>
    </Fragment>
  );
};

export default ListBeer;
