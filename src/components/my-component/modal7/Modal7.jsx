import React, { useState } from "react";
import "./modal7.css";
import Modal from "./modal7component/modal7com";

function Modal7() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv4">
      <div
        className="openModalBtn4"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div>
            <button className="lodbtn-withdraw2">
                Send
            </button>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}

    </div>
  );
}

export default Modal7;