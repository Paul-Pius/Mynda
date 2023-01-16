import React from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./congratAgent.css";
import { Link } from "react-router-dom";



function CongratAgent() {

    return (
        <div className="container-congrat">
            <form className="congratf">
                <h3 className="btnh">Congratulations</h3>
                <p className="acc">Account creation successful</p>
                <Link to="/agent/login">
                    <ReusableButton text="Login to your account" padding="1rem 5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                </Link>
            </form>
        </div>
    )
}

export default CongratAgent;