import React from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./congrat2.css";
import { Link } from "react-router-dom";



function Congrat2() {

    return (
        <div className="container-congrat">
            <form className="congratf">
                <h3 className="btnh">Congratulations</h3>
                <p className="acc">Password reset successful</p>
                <Link to="/mynda/login">
                    <ReusableButton text="Login to your account" padding="1rem 5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                </Link>
            </form>
        </div>
    )
}

export default Congrat2;