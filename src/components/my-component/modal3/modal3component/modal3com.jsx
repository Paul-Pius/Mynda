import React from "react";
import "./modal3com.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title2">
          <h4>Type</h4>
        </div>
        <div className="week2">
          <p>Full-time</p>
          <p>Part-time</p>
          <p>Temporary</p>
          <p>Other</p>
        </div>
  
      </div>
    </div>
  );
}

export default Modal;