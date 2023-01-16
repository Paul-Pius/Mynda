import React, { useState } from "react";
import "./modal4.css";
import Modal from "./modal4component/modal4com";
import topup from "../../../components/my-component/walet/topup.svg";

function Modal4() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv3">
      <div
        className="openModalBtn3"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img clasName="topup" src={topup} alt="topup"></img>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal4;