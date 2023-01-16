import React, { useState } from "react";
import "./lodgecomplain.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import FileUpload from "../../../components/my-component/uploadfile/UploadFile";

const LodgeComplain = () => {


    const [value, setValue] = useState({
        name: "",
        id: "",
        placeholder: ""
    });


    const handleInputName = (e) => {
        setValue({...value, name: e.target.value})
    }

    const handleInputId = (e) => {
        setValue({...value, id: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className="formdiv">
       
            <div className="navdiv">
                <img className="arrow" src={arrow} alt=""></img>
                <Navbar2 
                text="Lodge Complaint"
                boxSizing="border-box" 
                padding="2em 3em" /> 
            </div>
       
        <form className="formcomplain" onSubmit={handleSubmit}>

            <p className="logcomplaint">Log a complaint or report</p>

            <div className="lebel">
                <label>Name of Agent/Employer</label>
            </div>
            <div className="inputdiv">
                <input
                type="text"
                value={value.name}
                name="name"
                placeholder="Add Name"
                className="form-input"
                onChange={handleInputName}
                /> 
            </div>

            <div className="lebel2">
                <label>Profile ID</label>
            </div>
            <div>
                <input
                type="text"
                value={value.id}
                name="id"
                placeholder="Add profile ID of agent/employer"
                className="form-input"
                onChange={handleInputId} 
                />
            </div>

            <div className="lebel3">
                <label>Description</label>
            </div>
            <div>
                <textarea
                type="text"
                className="inptxt" 
                placeholder="Reason why you are lodging a complaint"
                />
            </div>

            <div className="lebel4">
                <label>Attach image/video evidence</label>
            </div>

            <div className="upload">
                <FileUpload />
                <FileUpload />
                <FileUpload />
            </div>

            <div>
                <button className="lodbtn">
                    Submit
                </button>
            </div>

        </form>
    </div>
  )
}

export default LodgeComplain;