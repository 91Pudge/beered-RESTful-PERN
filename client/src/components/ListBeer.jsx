import "./ListBeer.css";
import React, { Fragment, useState, useEffect } from "react";
import Input from "./InputBeer.jsx";

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

  useEffect(() => {
    getter();
  }, []);

  return (
    <Fragment>
      <Input />
      <div>
        {des
          .slice()
          .reverse()
          .map((des) => (
            <article>
              <div className="card">
                <br />
                {des.review_id}
                <br />
                {des.beer_name}
                <br />
                {des.brewery_name}
                <br />
                {des.style}
                <br />
                {des.descriptions}
                <button>Delete</button>
              </div>
            </article>
          ))}
      </div>
    </Fragment>
  );
};

export default ListBeer;
