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
      await fetch("http://localhost:5000/beer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        <div className="flex-input">
          <div className="input-card">
            <article>
              <header>Add Beer</header>
              <p>BEER NAME:</p>
              <input
                className="my-2"
                type="text"
                name="beer_name"
                value={beer_name}
                onChange={(e) => onChange(e)}
              />
              <p>BREWERY NAME:</p>
              <input
                className="my-2"
                type="text"
                name="brewery_name"
                value={brewery_name}
                onChange={(e) => onChange(e)}
              />
              <p>STYLE: </p>
              <input
                className="my-2"
                type="text"
                name="style"
                value={style}
                onChange={(e) => onChange(e)}
              />
              <p>DESCRIPTION:</p>
              <input
                className="my-2 mb-2"
                type="text"
                name="descriptions"
                value={descriptions}
                onChange={(e) => onChange(e)}
              ></input>
              <br />
              <button>Submit</button>
            </article>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputBeer;
