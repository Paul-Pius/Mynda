import React, { useState } from "react";
import "./modal5.css";
import Modal from "./modal5component/modal5com";
import delet from "../../../components/my-component/workx/delet.svg";

function Modal5() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv3">
      <div
        className="openModalBtn3"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img clasName="topup" src={delet} alt="topup"></img>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal5;