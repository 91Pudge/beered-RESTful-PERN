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
  const Delete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/beer/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      const newDes = res.filter((item) => item.review_id !== id);
      setDes(newDes);
      window.location = "/";
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
              <article>
                <div key={des.review_id} className="card">
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
                  <button onClick={() => Delete(des.review_id)}>Delete</button>
                </div>
              </article>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListBeer;
