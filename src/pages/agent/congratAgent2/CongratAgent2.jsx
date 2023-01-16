import React from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./congratAgent2.css";
import { Link } from "react-router-dom";
// import congratIcon from "../../../components/my-component/header/images/congratIcon.svg";



function CongratAgent2() {

    return (
        <div className="container-congrat">
            <form className="congratf">
                {/* <img src={congratIcon} alt="congratIcon"></img> */}
                <h3 className="btnh">Congratulations</h3>
                <p className="acc">Password reset successful</p>
                <Link to="/agent/login">
                    <ReusableButton text="Login to your account" padding="1rem 5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                </Link>
            </form>
        </div>
    )
}

export default CongratAgent2;