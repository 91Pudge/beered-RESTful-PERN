import "./ListBeer.css";
import React, { Fragment, useState, useEffect } from "react";
import Input from "./InputBeer.jsx";
import EditBeer from "./EditBeer.jsx";

const ListBeer = () => {
  const [des, setDes] = useState([]);
  const getter = async () => {
    try {
      const res = await fetch("http://localhost:5000/beer", { method: "GET" });
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
      const filterdes = des.filter((item) => item.review_id !== id);
      setDes(filterdes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getter();
  }, []);

  return (
    <Fragment>
      <div>
        <Input />
        <div>
          {des
            .slice()
            .reverse()
            .map((des) => (
              <article key={des.review_id}>
                <div className="card">
                  <text>Beer name: </text>
                  {des.beer_name}
                  <br />
                  <text>Brewery name: </text>
                  {des.brewery_name}
                  <br />
                  <text>Style: </text>
                  {des.style}
                  <br />
                  <text>Beer description: </text>
                  {des.descriptions}
                  <button onClick={() => Delete(des.review_id)}>Delete</button>
                  <EditBeer des={des} />
                </div>
              </article>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListBeer;
