import React from "react";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";

const InternationalFood = () => {

  return (
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="International Food Course"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

    </div>
  )
}

export default InternationalFood;