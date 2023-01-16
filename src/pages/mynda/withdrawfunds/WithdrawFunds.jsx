import React, { useState } from "react";
import "./withdrawfunds.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import Dropdown from "../../../components/my-component/dropdownmenu/DropdownMenu";
import Modal6 from "../../../components/my-component/modal6/Modal6";

const WithdrawFunds = () => {


    const [value, setValue] = useState({
        amount: "",
        placeholder: "",
        accountnumber: ""
    });


    const handleInputAmount = (e) => {
        setValue({...value, amount: e.target.value})
    }

    const handleInputAccountNumber = (e) => {
        setValue({...value, accountnumber: e.target.value})
    }

    const handleWithdraw = (e) => {
        e.preventDefault();
    }


  return (
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Withdraw Funds"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form className="formwithdraw" onSubmit={handleWithdraw}>


            <div className="lebel-withdraw">
                <label>Amount you want to withdraw</label>
            </div>
            <div className="inputdiv">
                <input
                type="text"
                value={value.amount}
                name="amount"
                placeholder="# E.g 1000,000"
                className="form-input-withdraw"
                onChange={handleInputAmount}
                /> 
            </div>


            <div className="lebel-withdraw2">
                <label>Account Number</label>
            </div>
            <div className="inputdiv">
                <input
                type="text"
                value={value.accountnumber}
                name="accountnumber"
                placeholder="Add your 10 digit number"
                className="form-input-withdraw"
                onChange={handleInputAccountNumber}
                /> 
            </div>

            <div className="lebel-withdrawoption">
                <label>Select bank</label>
            </div>
            <Dropdown
            optionData={["Select---"]}
            width="100%"
            height="50px"
            background="#F3F5F7"
            border="1px solid rgba(213, 211, 211, 0.1)"
            borderRadius="5px"
            />

            <div>
                <Modal6 />
            </div>


        </form>
        
    </div>
  )
}

export default WithdrawFunds;