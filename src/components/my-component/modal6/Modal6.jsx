import React, { useState } from "react";
import "./modal6.css";
import Modal from "./modal6component/modal6com";

function Modal6() {
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
                Withdraw
            </button>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}

    </div>
  );
}

export default Modal6;