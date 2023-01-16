import React from "react";
import "./modal7com.css";
import Swal from "sweetalert2";

function Modal({ setOpenModal }) {


const successAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Successful",
    text: "Funds sent successfully!",
    icon: "success",
    confirmButtonText: "ok",
  }).then(function() {
    window.location.href = "http://localhost:3000/mynda/wallet";
  })
};

  return (
    <div className="modalBackground6">
      <div className="modalContainer6">
        <div className="week2">
            <div>
              <form className="formtopupdelete">
                <div className="bin">
                </div>
                <div>
                  <p className="sure">Are you sure you want to send #... to ...?</p>
                </div>

                  <div className="deletecancel">
                      <button 
                      onClick={() => {setOpenModal(false)}}
                      className="btncancel">
                        Cancel
                      </button>

                      <button
                      onClick={successAlert}
                      className="btndelete">
                        Send
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