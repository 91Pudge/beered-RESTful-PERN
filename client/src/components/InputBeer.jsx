import React, { Fragment, useState } from "react";
import "./InputBeer.css";

const InputBeer = () => {
  const [inputs, setInputs] = useState({
    beer_name: "",
    brewery_name: "",
    style: "",
    descriptions: ""
  });

  const { beer_name, brewery_name, style, descriptions } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { beer_name, brewery_name, style, descriptions };
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch("http://localhost:5000/dashboard/beers", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      window.location.href = "/listbeer";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div id="inputs" className="input-card">
          <header>Add new beer</header>
          <input
            className="my-2"
            placeholder="Beer name:"
            type="text"
            name="beer_name"
            value={beer_name}
            onChange={(e) => onChange(e)}
          />
          <input
            className="my-2"
            placeholder="Brewery name:"
            type="text"
            name="brewery_name"
            value={brewery_name}
            onChange={(e) => onChange(e)}
          />
          <input
            className="my-2"
            type="text"
            placeholder="Style:"
            name="style"
            value={style}
            onChange={(e) => onChange(e)}
          />
          <textarea
            placeholder="Beer description:"
            rows="4"
            cols="45"
            type="text"
            name="descriptions"
            value={descriptions}
            onChange={(e) => onChange(e)}
          />
          <br />
          <button>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputBeer;
