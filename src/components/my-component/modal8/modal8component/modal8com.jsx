import React, { useState } from "react";
import "./modal8com.css";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {


  const [value, setValue] = useState({
    oldpassword: "",
    newpassword: "",
    retypenewpassword: ""
});

  const handleInputOldPassword = (e) => {
    setValue({...value, oldpassword: e.target.value})
  }

  const handleInputNewPassword = (e) => {
    setValue({...value, newpassword: e.target.value})
  }

  const handleInputRetypeNewPassword = (e) => {
    setValue({...value, retypenewpassword: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="modalBackground8">
      <div className="modalContainer8">

      <div className="titleCloseBtn4">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        
        <div className="title2">
          <h4>Change Password</h4>
        </div>
        
        <div className="week2">
          
        <div>

            <form className="formtopup" onSubmit={handleSubmit}>


                <div className="lebel-topup">
                    <label>Old Password</label>
                </div>
                <div className="inputdiv">
                    <input
                    type="text"
                    value={value.oldpassword}
                    name="oldpassword"
                    placeholder=""
                    className="form-input-topup"
                    onChange={handleInputOldPassword}
                    /> 
                </div>

                <div className="lebel-topup">
                    <label>New Password</label>
                </div>
                <div className="inputdiv">
                    <input
                    type="text"
                    value={value.newpassword}
                    name="newpassword"
                    placeholder=""
                    className="form-input-topup"
                    onChange={handleInputNewPassword}
                    /> 
                </div>

                <div className="lebel-topup">
                    <label>Retype New Password</label>
                </div>
                <div className="inputdiv">
                    <input
                    type="text"
                    value={value.retypenewpassword}
                    name="retypenewpassword"
                    placeholder=""
                    className="form-input-topup"
                    onChange={handleInputRetypeNewPassword}
                    /> 
                </div>

                <div>
                  <Link to="">
                      <button className="lodbtn-topup">
                          Submit
                      </button>
                  </Link>
                </div>

            </form>

            </div>

        </div>
  
      </div>
    </div>
  );
}

export default Modal;