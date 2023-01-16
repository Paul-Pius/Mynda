import React from "react";
import "../../../assets/styles/global-styles.css";
import "./verify-number.css";
import arrowL from "../../../assets/images/arrowL.svg";
import rectangle from "./images/rectangle.svg";

const VerifyNumber = () => {
  return (
    <>
      <div className="container">
        <div className="back-arrow">
          <a href="/employer/signup">
            <img src={arrowL} alt="go back"></img>
          </a>
        </div>

        <div className="verify-message">
          <h4>Verify Number With OTP</h4>
          <p>Kindly enter the 4-digit code sent to the number ending in 7815</p>
        </div>

        <div className="insert-code">
          <img src={rectangle} alt="input box"></img>
          <img src={rectangle} alt="input box"></img>
          <img src={rectangle} alt="input box"></img>
          <img src={rectangle} alt="input box"></img>
        </div>

        <div className="otp-timeout body-color-grey">
          <div className="resend-otp">
            <p>Resend OTP</p>
          </div>
          <div className="timer">
            <p>00:20</p>
          </div>
        </div>

        <div>
          <button className="app-btn-grey">Next</button>
        </div>
      </div>
    </>
  );
};

export default VerifyNumber;
