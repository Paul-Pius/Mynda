import React, { useState } from "react";
import "./trainingcertification.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";
import maids from "../../../components/my-component/training/maids.svg";
import locationlogo from "../../../components/my-component/training/locationlogo.svg";
import locationbenin from "../../../components/my-component/training/locationbenin.svg";
import mildives from "../../../components/my-component/training/mildives.svg";
import vancout from "../../../components/my-component/training/vancout.svg";
import currrice from "../../../components/my-component/training/currrice.svg";
import { Link } from "react-router-dom";

const TrainingCertification = () => {


    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [show, setShow] = useState(null);

    const TrainingSchool = () => {
        setClick(true)
        setClick2(!true)
        setShow("visible")
    }

    const OngoingClasses = () => {
        setClick2(true)
        setClick(!true)
        setShow("visible")
    }


  return (
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Trainig & Certifications"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form className="trainingform">


          <div className="training">
            <p
            onClick={TrainingSchool}
            > {click ? 
            <span style={{color: "#204ECF", borderBottom: "2px solid #204ECF"}}>
                Training schools
            </span> : <span>Training schools</span>}</p>

            <p
            onClick={OngoingClasses}
            > { click2 ? 
            <span style={{color: "#204ECF", borderBottom: "2px solid #204ECF"}}>
                Ongoing classes
            </span> : <span>Ongoing classes</span>}</p>
          </div>

          <div className="hrtr">
            <hr />
          </div>

          { click ?

                
                <div style={{visibility: show}}>
                        <div className="trdiv1">
                            <Link to="/mynda/mountainmaid">
                                <img className="maids" src={maids} alt="maids"></img>
                            </Link>
                            <h3 className="mountainmaid">Mountain Maid Training Agency</h3>
                            <img className="mountainmaid" src={locationlogo} alt="locationlogo"></img>
                            <p className="mountainmaid">
                                We are a certified training center in Lagos, our services includes training of maids...
                            </p>
                        </div>
                    <div className="trdiv1">
                        <img className="maids" src={mildives} alt="maids"></img>
                        <h3 className="mountainmaid">Mildives Training Center</h3>
                        <img className="mountainmaid" src={locationbenin} alt="locationlogo"></img>
                        <p className="mountainmaid">
                            We are a certified training center in Lagos, our services includes training of maids...
                        </p>
                    </div>
                    <div className="trdiv1">
                        <img className="maids" src={vancout} alt="maids"></img>
                        <h3 className="mountainmaid">Vancout Maid Training Center</h3>
                        <img className="mountainmaid" src={locationlogo} alt="locationlogo"></img>
                        <p className="mountainmaid">
                            We are a certified training center in Lagos, our services includes training of maids...
                        </p>
                    </div>
                </div> : null
                }

                { !click ?

                <div style={{visibility: show}}>
                        <img className="currrice" src={currrice} alt="maids"></img>
                        <img className="currrice" src={currrice} alt="maids"></img>
                </div> : null
                }
        </form>


    </div>
  )
}

export default TrainingCertification;