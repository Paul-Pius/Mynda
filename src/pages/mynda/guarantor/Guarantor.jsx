import React, { useState } from "react";
import "./guarantor.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import { Link } from "react-router-dom";

const Guarantor = () => {


    const [value, setValue] = useState({
        name: "",
        placeholder: "",
        phone: "",
        email: "",
        address: "",
        occupation: "",
        relationship: ""
    });


    const handleInputName = (e) => {
        setValue({...value, name: e.target.value})
    }

    const handleInputPhone = (e) => {
        setValue({...value, phone: e.target.value})
    }

    const handleInputEmail = (e) => {
        setValue({...value, email: e.target.value})
    }

    const handleInputAddress = (e) => {
        setValue({...value, address: e.target.value})
    }

    const handleInputOccupation = (e) => {
        setValue({...value, occupation: e.target.value})
    }

    const handleInputRelationship = (e) => {
        setValue({...value, relationship: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div>
        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Guarantor Form"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>


        <form className="formguarantor" onSubmit={handleSubmit}>

            <p>
                Kindly provide your guarantor's details. 
                <span style={{color: "red"}}>Note:</span> your guarantor will be notified.
            </p>

            <div className="lebel-guarantor">
                <label>Name</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.name}
                name="name"
                placeholder="First name and last name"
                className="form-input-guarantor"
                onChange={handleInputName}
                /> 
            </div>

            <div className="lebel-guarantor2">
                <label>Phone</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.phone}
                name="phone"
                placeholder="Add phone number"
                className="form-input-guarantor"
                onChange={handleInputPhone}
                /> 
            </div>

            <div className="lebel-guarantor3">
                <label>Email</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.email}
                name="email"
                placeholder="E.g @gmail.com"
                className="form-input-guarantor"
                onChange={handleInputEmail}
                /> 
            </div>

            <div className="lebel-guarantor4">
                <label>Address</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.address}
                name="address"
                placeholder="Street, House, No, City, State"
                className="form-input-guarantor"
                onChange={handleInputAddress}
                /> 
            </div>

            <div className="lebel-guarantor5">
                <label>Occupation</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.occupation}
                name="occupation"
                placeholder="Add occupation"
                className="form-input-guarantor"
                onChange={handleInputOccupation}
                /> 
            </div>

            <div className="lebel-guarantor6">
                <label>Relationship to guarantor</label>
            </div>
            <div className="inputdivguarantor">
                <input
                type="text"
                value={value.relationship}
                name="relationship"
                placeholder="Relationship to guarantor"
                className="form-input-guarantor"
                onChange={handleInputRelationship}
                /> 
            </div>

            <div>
                <Link to="/mynda/verification">
                    <button className="submitbtn-guarantor">
                        Submit
                    </button>
                </Link>

            </div>


        </form>
    </div>
  )
}

export default Guarantor;