import React from "react";
import "./selectmethod.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import logo from "../../../components/my-component/myndalogo/logo.svg";
import card from "../../../components/my-component/withcard/card.svg";
import mvisa from "../../../components/my-component/withcard/mvisa.svg";
import barter from "../../../components/my-component/withcard/barter.svg";
import attitude from "../../../components/my-component/withcard/attitude.svg";
import { Link } from "react-router-dom";


const SelectMethod = () => {


  return (

    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text=""
            boxSizing="border-box" 
            padding="3em 6em" /> 
        </div>

        <form className="selectmethodform">

            <div className="logodiv">
                <img clasName="logo" src={logo} alt="logo"></img>
            </div>

            <p className="how">How would you like to pay?</p>

            <div className="hr2">
                <hr />
            </div>

            <div className="paymentmethodsdiv">

                <div className="withcard">
                    <Link to="/mynda/addcardmynda">
                        <img className="withcard2" src={card} alt="card"></img>
                    </Link>
                </div>
                <div className="withcard">
                    <img className="withcard3" src={mvisa} alt="card"></img>
                </div>
                <div className="withcard">
                    <img className="withcard4" src={barter} alt="card"></img>
                </div>
                <div className="withcarda">
                    <img className="withcard5" src={attitude} alt="card"></img>
                </div>

            </div>
        </form>

    </div>
  )
}

export default SelectMethod;