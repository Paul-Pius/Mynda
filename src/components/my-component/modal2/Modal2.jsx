import React, { useState } from "react";
// import "./App.css";
import "./modal2.css";
import Modal from "./modal2component/modal2com";

function Modal2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv">
      {/* <h1>Hey, click on the button to open the modal.</h1> */}
      <div
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <p className="today">today</p>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal2;