import React, { useState } from "react";
import "./modal8.css";
import Modal from "./modal8component/modal8com";
import passwordsetting from "../../../components/my-component/accountsetting/passwordsetting.svg";

function Modal8() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="inputdiv3">
      <div
        className="openModalBtn3"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className='passwordsetting'>
            <img src={passwordsetting} alt="passwordsetting"></img>
        </div>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modal8;