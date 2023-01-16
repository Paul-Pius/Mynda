import React, { useState } from "react";
import "./sendfunds.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import Modal7 from "../../../components/my-component/modal7/Modal7";

const SendFunds = () => {


    const [value, setValue] = useState({
        amount: "",
        placeholder: "",
        walletnumber: "",
        description: ""
    });


    const handleInputAmount = (e) => {
        setValue({...value, amount: e.target.value})
    }

    const handleInputWalletNumber = (e) => {
        setValue({...value, walletnumber: e.target.value})
    }

    const handleInputDescription = (e) => {
        setValue({...value, description: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div>
        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Send Funds"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>


        <form className="formsend" onSubmit={handleSubmit}>

            <div className="lebel-send">
                <label>Amount you want to send</label>
            </div>
            <div className="inputdiv">
                <input
                type="text"
                value={value.amount}
                name="amount"
                placeholder="# E.g 1000,000"
                className="form-input-send"
                onChange={handleInputAmount}
                /> 
            </div>

            <div className="lebel-send2">
                <label>Wallet Number</label>
            </div>
            <div className="inputdiv">
                <input
                type="text"
                value={value.walletnumber}
                name="walletnumber"
                placeholder="Recipient wallet number"
                className="form-input-send"
                onChange={handleInputWalletNumber}
                /> 
            </div>

            <div className="lebel-send2">
                <label>Description</label>
            </div>
            <div>
                <textarea
                type="text"
                className="inptxt-send" 
                placeholder="E.g June Salary"
                onChange={handleInputDescription}
                />
            </div>


            <div>
                <Modal7 />
                {/* <button className="lodbtn-send">
                    Send
                </button> */}
            </div>


        </form>
    </div>
  )
}

export default SendFunds;