import React, { useState } from "react";
import "./modal4com.css";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {


  const [value, setValue] = useState({
    amount: "",
    placeholder: ""
});

  const handleInputAmount = (e) => {
    setValue({...value, amount: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="modalBackground4">
      <div className="modalContainer4">
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
          <h4>Topup Wallet</h4>
        </div>
        
        <div className="week2">
          
        <div>

            <form className="formtopup" onSubmit={handleSubmit}>

                <div className="lebel-topup">
                    <label>Amount you want to fund</label>
                </div>
                <div className="inputdiv">
                    <input
                    type="text"
                    value={value.amount}
                    name="amount"
                    placeholder="# E.g 1000,000"
                    className="form-input-topup"
                    onChange={handleInputAmount}
                    /> 
                </div>

                <div>
                  <Link to="/mynda/selectmethod">
                      <button className="lodbtn-topup">
                          Continue
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