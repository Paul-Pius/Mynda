import React, { useState } from "react";
import "./modal3.css";
import Modal from "./modal3component/modal3com";

function Modal3() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv2">
      <div
        className="openModalBtn2"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <p className="type">Type</p>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal3;