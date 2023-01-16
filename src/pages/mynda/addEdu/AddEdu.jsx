import React, { useState } from "react";
import SelectField from "../../../components/my-component/SelectField";
import ReusableButton from "../../../components/my-component/ReusableB";
import CheckBox from "../../../components/my-component/CheckBox";
import "./addEdu.css";
import { Link } from "react-router-dom";


function AddEducation() {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const [values, setValues] = useState({
        placeholder: "",
        start: "",
        end: ""
      });

    
    function handleOnchangeEmployment (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    function handleOnchangeStart (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    function handleOnchangeEnd (e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.phone && values.email && values.password && values.retypepassword) {
          setValid(true)
        }
        setSubmitted(true);
      }

    return (
        
        <div className="container-addedu" style={{marginRight: ""}}>
            <form className="fom-add-edu" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success!</div> : null}
                <div className="telusheadaddedu">
                    <h3 style={{padding: "2rem", color: "#1D1D1D", textAlign: "center", marginTop: "8rem"}}>Add Education</h3>
                    <div>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "1rem"}}/>
                    </div>
                    <h3 style={{color: "#1D1D1D", marginBottom: "-1rem", textAlign: "left"
                        }}>Add Education Level</h3>
                </div>
                
               
                <label className="headaddedu">Select Level of Education</label>
                <SelectField
                optionData={['Select ---']}
                value={values}
                handleChange={handleOnchangeEmployment}
                name="employment" 
                />

               
                <div style={{display: "flex", justifyContent: "space-between", marginRight: "5.5rem", paddingBottom: "5rem", color: "#1D1D1D"}}>
                    <label className="hea" style={{color: "#1D1D1D"}}>Start Date</label>
                    <label className="hea" style={{color: "#1D1D1D"}}>End Date</label>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginTop: "-5rem", marginRight: "8rem", marginBottom: "1rem"}}>

                <input style={{width: "75%", 
                borderRadius: "5px", 
                paddingTop: "1.5rem",
                border: "none",
                background: "#F3F5F7"
            }}
                    handleChange={handleOnchangeStart}
                    value={values.name}
                    optionData={['Start Date']}
                    type= "date"
                    className="input-addedu"
                    placeholder="Start Date"
                    name="start"
                    />

                <input style={{width: "75%", 
                borderRadius: "5px", 
                paddingTop: "1.5rem",
                marginRight: "-7.7rem", 
                border: "none",
                background:"#F3F5F7"
            }}
                    handleChange={handleOnchangeEnd}
                    value={values.name}
                    optionData={['End Date']}
                    type= "date"
                    placeholder="End Date"
                    name="end"
                    className="input-addedu"
                    />
                </div>
                
                <div className="checkbox" style={{marginBottom: "2.5rem", paddingRight: "13rem"}}>
                    <CheckBox />
                </div>

                <span className="addnew">+ Add New</span>            

                <div>
                    <Link to="/mynda/verification">
                        <ReusableButton text="Submit" padding="1rem 8.5rem" background="#204ECF" borderRadius="5px" fontSize="16px"/>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddEducation;