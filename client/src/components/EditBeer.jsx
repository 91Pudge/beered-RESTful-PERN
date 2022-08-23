import React, { Fragment } from "react";
import "./EditBeer.css";

const EditBeer = () => {
  return (
    <Fragment>
      <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
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
              <input></input>
              <br />
              <p>BREWERY NAME:</p>
              <input></input>
              <br />
              <p>STYLE:</p>
              <input></input>
              <br />
              <p>DESCRIPTION:</p>
              <input></input>
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
              <button type="button" className="btn">
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

// onChange={(e) => setDescriptions(e.target.value)
// onChange={(e) => setStyle(e.target.value)}
// onChange={(e) => setBrewery_name(e.target.value)
