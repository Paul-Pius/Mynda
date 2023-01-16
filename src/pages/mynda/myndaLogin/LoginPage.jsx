import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import "./loginPage.css";
import { Link } from "react-router-dom";


function MyndaLogin() {

    const [login, setLogin] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        email: "",
        password: ""
      })

      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.email && values.password) {
          setValid(true);
        }
        setLogin(true)
      }


      const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
      }

      const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})
      }


    return (
        <div className="login-container">
            <form className="register-form-login" onSubmit={handleSubmit}>
            {login && valid ? <div className="success-message">Login Successfull!</div> : null}
                    <h3 className="header">Welcome Back 👏</h3>
                    <p className="paragraph">You can now login to apply for jobs</p>

                <label className="labs" style={{marginRight: "18rem"}}>Email</label>
                <input
                onChange={handleEmailInputChange}
                value={values.email}
                className="form-field-login"
                placeholder="E.g @gmail.com"
                name="email"
                />
                {login && !values.email ? <span className="spn">Please enter email</span> : null}

                <label className="labs" style={{marginRight: "15.9rem"}}>Password</label>
                <input
                onChange={handlePasswordInputChange}
                value={values.password}
                className="form-field-login"
                placeholder="Enter password"
                name="password"
                />
                <Link to="/mynda/resetpassword">
                    <p style={{color: "#204ECF", marginLeft: "13rem", marginTop: "-3.5rem", fontSize: "14px", cursor: "pointer"}}>Forgot Password?</p>
                </Link>
                {/* {login && !values.password ? <span className="spn">Please enter password</span> : null} */}
                <div style={{marginTop: "-5rem"}}>
                  <Link to="/mynda/homepage">
                      <ReusableButton text="Login" padding="1rem 9rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                  </Link>
                </div>
                  <p style={{
                    marginTop: "-2.5rem",
                    marginLeft: "-0.5rem", 
                    fontWeight: "400", 
                    fontSize: "14px",
                    lineHeight: "17px"}}>Don't have an account?<Link to="/mynda/createaccount"><span className="log" style={{
                      color: "#204ECF", 
                      fontWeight: "600" , 
                      fontSize: "14px", 
                      lineHeight: "17px"}}>Sign Up</span></Link></p>
            </form>
        </div>
    )
}

export default MyndaLogin;