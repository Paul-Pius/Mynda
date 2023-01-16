import React, { useState } from "react";
import "./modal9com.css";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="modalBackground9">
      <div className="modalContainer9">
        <div className="titleCloseBtn9">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        
        <div className="week2">
          
        <div>

            <form className="formtopup" onSubmit={handleSubmit}>
                <h3>Select the location you want for this training?</h3>
                <p>Offline/Remote</p>
                <p>Onsite</p>
                  <div>
                    <Link to="/mynda/selectmethod2">
                        <button className="lodbtn-topup">
                            Proceed to payment
                        </button>
                    </Link>
                  </div>
            </form>

            </div>

        </div>
  
      </div>
    </div>
  );
}

export default Modal;