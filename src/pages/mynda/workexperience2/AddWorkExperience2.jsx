import React from "react";
import ReusableButton from "../../../components/my-component/ReusableB";
import edit from "../../../components/my-component/workx/edit.svg";
import { Link } from "react-router-dom";
import Modal5 from "../../../components/my-component/modal5/Modal5";
// import SelectField from "../../../components/my-component/SelectField";
// import CheckBox from "../../../components/my-component/CheckBox";
// import Text from "../../../components/my-component/TextArea";
import "./addworkexperience2.css";


function AddWorkExperience2() {

    
    return (
        
        <div className="container-workexperience2">
            <form className="fom-work-experience2">
                <div className="telusheadworkx12">
                    <div className="tellusheadworkx2">
                        <h3 style={{padding: "0.5rem", color: "#1D1D1D", textAlign: "center", marginTop: "8rem", width:"100%"}}>Work Experience</h3>
                        <hr style={{backgroundColor: "#F3F5F7", border: "1px", height: "1px", marginBottom: "1rem"}}/>
                    </div>
                    <h3 style={{color: "#1D1D1D", marginBottom: "1rem", textAlign: "left"
                        }}>Add Work Experience</h3>
                </div>

                <div className="carddivwrkx">
                    <div className="hr">
                        <hr />
                    </div>
                    <div className="de">
                        <Link to="/mynda/workexperience">
                            <img src={edit} alt=""></img>
                        </Link>

                        <div className="del">
                            <Link to="">
                                <Modal5 />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="newx">
                    <span>+ Add New Experience</span>
                </div>

                <div>
                    <Link to="/mynda/verification">
                        <ReusableButton text="Submit" padding="1rem 9.5rem" background= "#204ECF" borderRadius="5px" fontSize="16px" />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddWorkExperience2;