import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import DropFile from "../../../components/my-component/DropFile";
import UploadImgDrop from "../../../components/my-component/UploadImgDrop";
import './personalDetails.css';
import Text from "../../../components/my-component/TextArea";
import SelectField from "../../../components/my-component/SelectField";
import SelectField2 from "../../../components/my-component/SelectField2";
import arrowL from '../../../assets/images/arrowL.svg';
import { Link } from "react-router-dom";


function PersonalDetails() {

  const [values, setValues] = useState({});
  const [values1, setValues1] = useState({inputselect: ""});
  const [lga, setLga] = useState({});

  const [submitted, setSubmitted] = useState(false);
  const [setValid] = useState(false);

  const handleBvnInputChange = (event) => {
    setValues({...values, bvn: event.target.value})
  }

  function handleOnchangeinput (e)  {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    });
};
  function handleOnchangeinputSelect (e)  {
    setValues1({
        ...values1,
        [e.target.name]: e.target.value,
    });
};

function handleOnchangeLga1 (e)  {
    setLga({
        ...lga,
        [e.target.name]: e.target.value,
    });
};
function handleOnchangeLga (e)  {
    setLga({
        ...lga,
        [e.target.name]: e.target.value,
    });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.bvn && values.facebook) {
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <div className="form-contain-personal">
      <form className="register-form-upload-editshare" onSubmit={handleSubmit}>
        <div className="navdiv">
          <div className="form-header-personal">
            <img className= "form-header-arrow-personal" src={arrowL} alt="placeholder"></img>
          </div>
          <div className="personaldetails">
            <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginTop: "2rem", marginBottom: "0.5rem"}}/>
          </div>
        </div>
        <p className="prfedit" style={{marginTop: "10rem"}}>Personal Details</p>
      <div style={{display: "flex", marginTop: "2rem", marginTop: ""}}>
        <UploadImgDrop />
        <label className="" style={{marginTop: "1.6rem", marginLeft: "-15rem"}}>Upload Image</label>
      </div>
      <label className="head-personal">Gender</label>
      <div style={{width: "22.5rem", marginBottom: "-1rem"}}>
        <SelectField
        label=""
        optionData={['Select---', 'Male', 'Female', 'Other']}
        value={values.inputOne}
        handleChange={handleOnchangeinput}
        name="inputOne"
        />
        </div>

      <label className="head-personal">Religion</label>
        <div style={{width: "22.5rem", marginBottom: "-1.5rem"}}>
        <SelectField
        label=""
        optionData={['Select---', 'Christian', 'Muslim', 'Other']}
        value={values1.inputselect}
        handleChange={handleOnchangeinputSelect}
        name="inputselect"
        />
      </div>

      <div style={{display: "flex", justifyContent: "space-between", marginRight: "4.3rem", paddingBottom: "5rem", color: "#1D1D1D"}}>
                    <p className="hea" style={{color: "#1D1D1D"}}>State of origin</p>
                    <p className="hea" style={{color: "#1D1D1D"}}>LGA of origin</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "-5rem", marginRight: "8rem"}}>
                    <SelectField2
                    label=""
                    optionData={['Select---']}
                    value={lga}
                    handleChange={handleOnchangeLga1}
                    name="states" 
                    />
                    <SelectField2
                    label=""
                    optionData={['Select---']}
                    value={lga}
                    handleChange={handleOnchangeLga}
                    name="states" 
                    />
                </div>

        <label className="bvn" style={{marginTop: "2rem", marginRight: "22rem"}}>BVN</label>
        <input
          onChange={handleBvnInputChange}
          value={values.bvn}
          className="form-field-personal"
          placeholder="Add your BVN number"
          name="name"
         />
        {submitted && !values.phone ? <span>Please enter bvn</span> : null}
        <div style={{marginTop: "1rem"}}>
        <label className="nin" style={{marginRight: "7rem"}}>Upload National Identity Card(NIN)</label>
        </div>
        <div style={{marginBottom: "1rem"}}>
          <DropFile />
        </div>
        <label className="nin" style={{marginRight: "15.2rem"}}>Upload Utility Bill</label>
        <div style={{marginBottom: "1rem"}}>
          <DropFile />
        </div>
        <label className="" style={{marginRight: "19rem"}}>Address</label>
          <Text  placeholder="House no, street, state"/>
          <Link to="/agent/companyinfo">
              <ReusableButton text="Next" padding="1rem 10.5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
          </Link>
      </form>
    </div>
  );
}

export default PersonalDetails;




