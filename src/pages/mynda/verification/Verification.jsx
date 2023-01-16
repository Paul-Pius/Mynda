import React from 'react';
import "./verification.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import VerifyCard from '../../../components/my-component/verifyCard/VerifyCard';
import elipse from "../../../components/my-component/header/images/elipse.svg";
import transportarrow from "../../../components/my-component/header/images/transportarrow.svg";
import car from "../../../components/my-component/header/images/car.svg";
import fwrdarrow from "../../../components/my-component/header/images/fwrdarrow.svg";
import home from "../../../components/my-component/bottomicons/home.svg";
import { Link } from "react-router-dom";


const Verification = () => {
    return (
        <>
            <Navbar2 text="Verification" padding="2em 3em" />
            <div className='verification-contain'>
                <p className='text'>
                    We need to verify your information,
                    kindly submit the documents below to
                    process your verification.
                </p>
                <form className='form-verify'>
                    <div className='vcard'>
                        <div className='elipsediv'>
                            <img style={{background: "#204ECF"}} className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                        <VerifyCard
                            text="Identity Verification"
                            background="#FFFFFF"
                            padding="1rem 1rem"
                            width=""
                        />
                        <div className='fwrdarrowdiv'>
                            <img className="fwrdarro" src={fwrdarrow} alt="fwrdarrow" />
                        </div>
                    </div>

                    <div className='vcard2'>
                        <div className='elipsediv'>
                            <img className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                        <VerifyCard
                            text="Work Experience"
                            background="#FFFFFF"
                            padding="1rem 1rem"
                            width=""
                        />
                        <div className='fwrdarrowdiv'>
                            <Link to="/mynda/workexperience">
                                <img className="fwrdarrow" src={fwrdarrow} alt="fwrdarrow" />
                            </Link>
                        </div>
                    </div>

                    <div className='vcard3'>
                        <div className='elipsediv'>
                            <img className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                        <VerifyCard
                            text="Education"
                            background="#FFFFFF"
                            padding="1rem 1rem"
                            width=""
                        />
                        <div className='fwrdarrowdiv'>
                            <Link to="/mynda/addeducation">
                                <img className="fwrdarrow" src={fwrdarrow} alt="fwrdarrow" />
                            </Link>
                        </div>
                    </div>

                    <div className='vcard4'>
                        <div className='elipsediv'>
                            <img className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                        <VerifyCard
                            text="Lab Test"
                            background="#FFFFFF"
                            padding="1rem 1rem"
                            width=""
                        />
                        <div className='fwrdarrowdiv'>
                            <Link to="/mynda/labtest">
                                <img className="fwrdarrow" src={fwrdarrow} alt="fwrdarrow" />
                            </Link>
                        </div>
                    </div>

                    <div className='vcard5'>
                        <div className='elipsediv'>
                            <img className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                        <VerifyCard
                            text="Guarantor"
                            background="#FFFFFF"
                            padding="1rem 1rem"
                            width=""
                        />
                        <div className='fwrdarrowdiv'>
                            <Link to="/mynda/guarantorform">
                                <img className="fwrdarrow" src={fwrdarrow} alt="fwrdarrow" />
                            </Link>
                        </div>
                    </div>

                    <div className='vcard6'>
                        <div className='elipsediv'>
                            <img className="elipse" src={elipse} alt="elipse"></img>
                        </div>
                            <VerifyCard
                                text="Police Verification"
                                background="#FFFFFF"
                                padding="1rem 1rem"
                                width=""
                            />
                        <div className='fwrdarrowdiv'>
                            <Link to="/mynda/policeverification">
                                <img className="fwrdarrow" src={fwrdarrow} alt="fwrdarrow" />
                            </Link>
                        </div>
                        <div className='transport'>
                                {/* <h4 className='transporttxt1'>Transportation just got easier</h4>
                                <p className='transporttxt2'>Ride with bolt today</p> */}
                            <div className='cardiv'>
                                <img className="car" src={car} alt="car"></img>
                            </div>
                            <div className='transportarrowdiv'>
                                <img className="transportarrow" src={transportarrow} alt="transportarrow"></img>
                            </div>
                        </div>
                    </div>
                    <div className="homeverify">
                        <Link to="/mynda/homepage">
                            <img className="homeim" src={home} alt="home"></img> 
                        </Link>
                    </div>
                </form>
            </div>
       </>
    )
}

export default Verification;
