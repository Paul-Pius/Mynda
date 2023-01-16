import React, { useState } from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import SelectField from "../../../components/my-component/SelectField";
import SelectField2 from "../../../components/my-component/SelectField2";
import RadioButton from "../../../components/my-component/RadioButton";
import RadioButton2 from "../../../components/my-component/RadioButton2";
import MultipleSelect from "../../../components/my-component/MultiSelectMenu";
import Text from "../../../components/my-component/TextArea";
import "./aboutYourself.css";
import { Link } from "react-router-dom";

function AboutYourself() {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        bvn: "",
        facebook: "",
        placeholder: ""
      });
      
    const [formData, setFormData] = useState({
        skills: "",
        religion: "",
        occupation: "",
        gender: "",
        states: "",
        localgovernment: ""
    });

    const [formDataRel, setFormDataRel] = useState({
        skills: "",
        religion: "",
        occupation: "",
        gender: ""
    });

    const [formDataOcc, setFormDataOcc] = useState({
        skills: "",
        religion: "",
        occupation: "",
        gender: ""
    });

    function handleOnchangeGender (e)  {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleOnchangeReligion (e)  {
        setFormDataRel({
            ...formDataRel,
            [e.target.name]: e.target.value,
        });
    };

    function handleOnchangeOccupation (e)  {
        setFormDataOcc({
            ...formDataOcc,
            [e.target.name]: e.target.value,
        });
    };


    const handleNameInputChange = (event) => {
        setValues({...values, bvn: event.target.value})
        console.log(event.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.phone && values.email && values.password && values.retypepassword) {
          setValid(true)
        }
        setSubmitted(true);
      }

    return (
        
        <div className="container-about">
            <form className="fom-about" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telushead">
                    <h3 style={{paddingTop: "12rem", textAlign: "left", color: "#1D1D1D"}}>Tell Us A Bit About Yourself</h3>
                    <p style={{color: "#1D1D1D", textAlign: "left"
                    }}>Kindly fill in the correct details about yourself</p>
                </div>
                <label className="labe" style={{}}>About me</label>
                <div style={{marginBottom: "1.5rem", marginTop: "rem"}}>
                    <Text style={{fontFamily:"sans serif"}}
                        placeholder="Short description about yourself"
                    />
                </div>
                <label className="head" style={{marginRight: "19.5rem"}}>Gender</label>
                <SelectField
                label=""
                optionData={['Select ---', 'Male', 'Female']}
                value={formData.gender}
                handleChange={handleOnchangeGender}
                name="gender" 
                />

                <label className="headdate" style={{}}>Date of Birth</label>
                <input style={{borderRadius: "5px", width: "90%"}}
                onChange={handleNameInputChange}
                value={values.name}
                className="form-field-aboutyou"
                placeholder="MM/DD/YY"
                name="Date of birth"
                />

                <div className="lgadiv" style={{display: "flex", justifyContent: "space-between", marginRight: "4.3rem", paddingBottom: "5rem", color: "#1D1D1D"}}>
                    <p className="hea" style={{color: "#1D1D1D"}}>State of origin</p>
                    <p className="hea" style={{color: "#1D1D1D"}}>LGA of origin</p>
                </div>
                <div className="lgadiv2" style={{display: "flex", justifyContent: "space-between", marginTop: "-5rem", marginRight: "8rem"}}>
                    <SelectField2
                    label=""
                    optionData={['Select---']}
                    value={formDataOcc.name}
                    handleChange={handleOnchangeOccupation}
                    name="states" 
                    />
                    <SelectField2
                    label=""
                    optionData={['Select---']}
                    value={formDataOcc.name}
                    handleChange={handleOnchangeOccupation}
                    name="states" 
                    />
                </div>

                <p className="head" style={{marginTop: "3rem"}}>Religion</p>
                <SelectField
                label=""
                optionData={['Select---', 'Muslim', 'Christianity']}
                value={formDataRel.religion}
                handleChange={handleOnchangeReligion}
                name="religion"
                />

                <label className="headocu" style={{}}>Occupation category</label>
                <SelectField
                label=""
                optionData={['Select---', 'Maid/Helper', 'Cooks', 'Nurses', 'Drivers', 
                'Gardener', 'Bouncers', 'Drycleaners', 'Bodyguards', 'Teachers', 'Messengers']}
                value={formDataOcc.occupation}
                handleChange={handleOnchangeOccupation}
                name="occupation" 
                />
                <label className="head" style={{marginRight: "22rem"}}>Skills</label>
                <div style={{marginBottom: "1.5rem"}}>
                    <MultipleSelect />
                </div>
            
                <label className="head" style={{marginRight: "22rem"}}>Address</label>
                <div style={{marginBottom: "1.5rem"}}>
                    <Text />
                </div>
                <label className="headstates" style={{}}>States you are ready to work/relocate</label>
                    <SelectField
                    label=""
                    optionData={['Select---']}
                    value={formDataOcc.name}
                    handleChange={handleOnchangeOccupation}
                    name="states" 
                    />

                <label className="headsalary" style={{}}>Salary expectation</label>
                <input style={{borderRadius: "5px", width: "90%"}}
                onChange={handleNameInputChange}
                value={values.name}
                className="form-field-aboutyou"
                placeholder="#"
                name="Date of birth"
                /> 
                <div className="">
                    <p className="head">Do you have any disabiliy</p>
                    <div style={{textAlign: "left", marginTop: "-1rem", marginBottom: "1.5rem"}}>
                        <RadioButton />
                    </div>
                    <p className="head">Do you have allergies</p>
                    <div style={{textAlign: "left", marginTop: "-1rem"}}>
                        <RadioButton2 />
                    </div>
                </div>
                <div>
                    <Link to="/mynda/uploadproof">
                        <ReusableButton text="Next" padding="1rem 10.5rem" background= "#204ECF" borderRadius="5px" fontSize="16px"/>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AboutYourself;