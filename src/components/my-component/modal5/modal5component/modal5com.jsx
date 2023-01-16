import React from "react";
import bin from "../../../my-component/modal/bin.svg";
import "./modal5com.css";

function Modal({ setOpenModal }) {

  return (
    <div className="modalBackground5">
      <div className="modalContainer5">
        <div className="week2">
            <div>
              <form className="formtopupdelete">
                <div className="bin">
                  <img clasName="binim" src={bin}></img>
                </div>
                <div>
                  <p className="sure">Are you sure you want to delete this work experience?</p>
                </div>

                  <div className="deletecancel">
                      <button 
                      onClick={() => {setOpenModal(false)}}
                      className="btncancel">
                        Cancel
                      </button>

                      <button className="btndelete">
                        Delete
                      </button>
                  </div>

              </form>

            </div>

        </div>
  
      </div>
    </div>
  );
}

export default Modal;