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
            <div className="input-card">
              <br />
              <p>{des.review_id}</p>
              <br />
              <p>{des.beer_name}</p>
              <br />
              <p>{des.brewery_name}</p>
              <br />
              <p>{des.style}</p>
              <br />
              <p>{des.descriptions}</p>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default ListBeer;
