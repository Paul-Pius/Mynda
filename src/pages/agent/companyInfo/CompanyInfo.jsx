import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import UploadCAC from "../../../components/my-component/UploadCACDrop";
import Text from "../../../components/my-component/TextArea";
import Multi from "../../../components/my-component/Multiselect/MultiSelect";
import './companyInfo.css';
import { Link } from "react-router-dom";


function CompanyInfo() {

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
    address: "",
    placeholder: ""
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
    console.log(event.value)
  }

  const handlePhoneInputChange = (event) => {
    setValues({...values, phone: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.phone && values.email && values.address && values.text) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="container-companyinfo">
      <form className="register-form-companyinfo" onSubmit={handleSubmit}>
      {/* <h2 className="head-info">Company's Information</h2> */}
      <div className="line">
        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "10rem", marginBottom: "0.5rem"}}/>
      </div>
      <h3 className="head-inf">Company's Information</h3>
    
        {submitted && valid ? <div className="success-message">Success!</div> : null}
        <label className="lab">Company Name</label>
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field-info"
          placeholder="Add name"
          name="name"
         />
         {submitted && !values.name ? <span className="warning">Please enter company name</span> : null}

          <label className="lab">Email</label>
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field-info"
          placeholder="Company's email"
          name="email"
          />
          {submitted && !values.email ? <span className="warning">Please enter email</span> : null}

         <label className="lab">Phone Number</label>
        <input
          onChange={handlePhoneInputChange}
          value={values.phone}
          className="form-field-info"
          placeholder="e.g +234"
          name="phone"
          />
          {submitted && !values.phone ? <span className="warning">Please enter phone number</span> : null}

         <label className="lab">Office Address</label>
        <input
          onChange={handleAddressInputChange}
          value={values.address}
          className="form-field-info"
          placeholder="State, street, LGA"
          name="address"
         />
         {submitted && !values.address ? <span className="warning">Please enter address</span> : null}

         
        <div style={{marginBottom: "1rem", marginRight: ""}}>
          <label className="labu">Upload CAC Certificate</label>
        </div>
        <UploadCAC />

         <div style={{marginBottom: "0.5rem"}}>
          <label className="lab2">About Us</label>
         </div>
         <div>
            <Text style={{fontFamily: ""}} placeholder = "Brief description about your company"/>
         </div>
         <label className="lab1">Select Service</label>
         {submitted && !values.text ? <span className="warning">Please give brief explanation about your company</span> : null}
         <div>
            <Multi />
         </div>
         <div className="submtb">
          <Link to="/agent/congrat">
            <ReusableButton text="Submit" padding="1rem 9.5rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
          </Link>
         </div>
         <div className="term" style={{lineHeight: "3rem", marginTop: "0.5rem"}}>
          <p style={{
            color: "#1D1D1D", 
            fontWeight: "400", 
            fontSize: "12px", 
            lineHeight: "19px"}}>By clicking "Signup" you accept the 
            
            <Link to="/agent/terms"><span style={{
              color: "#204ECF", 
              lineHeight: "19px", 
              fontWeight: "400", 
              fontSize: "12px"}}>Terms of</span></Link>
              </p>

          <p className="policy">
            <Link><span style={{
            color: "#204ECF", 
            lineHeight: "19px", 
            fontWeight: "400", 
            fontSize: "12px"}}>service </span></Link>

            <span style={{
              color: "#1D1D1D", 
              fontWeight: "400", 
              fontSize: "12px", 
              lineHeight: "19px"
            }}>and</span>

              <Link to="/agent/terms"><span style={{
                color: "#204ECF", 
                lineHeight: "19px", 
                fontWeight: "400", 
                fontSize: "12px"}}> Privacy Policy</span></Link></p>
        </div>
      </form>
    </div>
  );
}

export default CompanyInfo;
