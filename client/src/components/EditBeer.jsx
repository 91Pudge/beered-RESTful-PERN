import React, { Fragment, useState } from "react";
// import "./EditBeer.css";

const EditBeer = ({ des }) => {
  const [beer_name, setBeer_name] = useState(des.beer_name);
  const [brewery_name, setBrewery_name] = useState(des.brewery_name);
  const [style, setStyle] = useState(des.style);
  const [descriptions, setDescriptions] = useState(des.descriptions);

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = { beer_name, brewery_name, style, descriptions };

      await fetch(`beer/${des.review_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {" "}
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        Edit
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit/Delete
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>BEER:</p>
              <input
                value={beer_name}
                type="text"
                onChange={(e) => setBeer_name(e.target.value)}
              ></input>
              <br />
              <p>BREWERY NAME:</p>
              <input
                value={brewery_name}
                type="text"
                onChange={(e) => setBrewery_name(e.target.value)}
              ></input>
              <br />
              <p>STYLE:</p>
              <input
                value={style}
                type="text"
                onChange={(e) => setStyle(e.target.value)}
              ></input>
              <br />
              <p>DESCRIPTION:</p>
              <input
                value={descriptions}
                type="text"
                onChange={(e) => setDescriptions(e.target.value)}
              ></input>
              <br />
              <br />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onClick={(e) => Update(e)} type="button" className="btn">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBeer;
