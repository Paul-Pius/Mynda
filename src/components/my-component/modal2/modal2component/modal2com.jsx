import React from "react";
import "./modal2com.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          <h4>Relevance</h4>
        </div>
        <div className="week">
          <p>Today</p>
          <p>Week</p>
          <p>Month</p>
        </div>
  
      </div>
    </div>
  );
}

export default Modal;