import "./ListBeer.css";
import React, { Fragment, useState, useEffect } from "react";
import Input from "./InputBeer.jsx";
import EditBeer from "./EditBeer.jsx";

const ListBeer = () => {
  const [des, setDes] = useState([]);
  const getter = async () => {
    try {
      const res = await fetch("http://localhost:5000/beer", {
        method: "GET"
      });
      const data = await res.json();
      console.log(data);
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

  // console.log(des.review_id);
  return (
    <Fragment>
      <div>
        <Input />
        <div>
          {des
            .slice()
            .reverse()
            .map((de) => (
              <article key={de.review_id}>
                <div className="card">
                  <text>Beer name: </text>
                  {de.beer_name}
                  <br />
                  <text>Brewery name: </text>
                  {de.brewery_name}
                  <br />
                  <text>Style: </text>
                  {de.style}
                  <br />
                  <text>Beer description: </text>
                  {de.descriptions}
                  <button onClick={() => Delete(de.review_id)}>Delete</button>
                  <EditBeer de={de} />
                </div>
              </article>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListBeer;
