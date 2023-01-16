import React, { useState } from "react";
import "./topupwallet.css";
import { Link } from "react-router-dom";

const TopUpWallet = () => {


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
    <div>

        <form className="formtopup" onSubmit={handleSubmit}>

        <p className="topupwallet">Topup Wallet</p>

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
              <Link to="">
                  <button className="lodbtn-topup">
                      Continue
                  </button>
              </Link>
            </div>

        </form>

    </div>
  )
}

export default TopUpWallet;