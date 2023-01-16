import React, { useState } from "react";
import "./modal9.css";
import Modal from "./modal9component/modal9com";

function Modal9() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv9">
      <div
        className="openModalBtn9"
        onClick={() => {
          setModalOpen(true);
        }}
      >
          <div className="applynow">
            <div className="">
                Apply Now
            </div>
          </div>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal9;