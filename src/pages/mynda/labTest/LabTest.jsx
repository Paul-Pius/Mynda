import React from 'react';
import './labTest.css';
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import SearchBar from '../../../components/my-component/search/SearchBar';
import VerifyCard from '../../../components/my-component/verifyCard/VerifyCard';
import lagoon from '../../../components/my-component/header/images/lagoon.svg';
import redcross from '../../../components/my-component/header/images/redcross.svg';
import people from '../../../components/my-component/header/images/people.svg';
import adjust from "../../../components/my-component/header/images/adjust.svg";
import { Link } from "react-router-dom";

const LabTest = () => {
  return (
        <>

                <Navbar2 
                text="Lab Test"
                boxSizing="border-box" 
                padding="2em 3em" />

            <div className='labtest-div'>
                <p className='text-labtest'>
                    Visit any of the listed hospital centers below,
                    and run a comprehensive
                    media test
                </p>

                <div className="searches">
                    <div className="searchbar">
                        <SearchBar placeholder="Search and filter location"/>
                        <Link to="/mynda/filterlocation">
                            <div className="searchIcon2"><img src={adjust} /></div>    
                        </Link>
                    </div>
                </div>

                <Link to="/mynda/labtest2">
                    <div className='vcard-labtest'>
                        <img className="lagoonbadge" src={lagoon} alt="lagoonbadge"></img>
                        <h4 className='header-labtest'>Lagoon Hospital Abuja</h4>
                            <VerifyCard
                                text="Plot 123,34 Crescent 3rd Avenue, 
                                Gwarinpa 900108, Abuja FCT, 
                                Nigeria"
                                background="#FFFFFF"
                                padding="2.2rem 2rem 2em 3.5em"
                            />
                    </div>
                </Link>

                <div className='vcard-labtest2'>
                    <img className="redcross" src={redcross} alt="redcross"></img>
                    <h4 className='header-labtest2'>Etta Atlantic Memorial Centre</h4>
                    <VerifyCard
                        text="Plot 123,34 Crescent 3rd Avenue, 
                        Gwarinpa 900108, Abuja FCT, 
                        Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-labtest3'>
                    <img className="people" src={people} alt="people"></img>
                    <h4 className='header-labtest3'>Kelina Hospital Abuja</h4>
                    <VerifyCard
                        text="Plot 123,34 Crescent 3rd Avenue, 
                        Gwarinpa 900108, Abuja FCT, 
                        Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-labtest4'>
                    <img className="people" src={lagoon} alt="lagoon"></img>
                    <h4 className='header-labtest4'>Lagoon Hospital Abuja</h4>
                    <VerifyCard
                        text="Plot 123,34 Crescent 3rd Avenue, 
                        Gwarinpa 900108, Abuja FCT, 
                        Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

            </div>
       </>
  )
}

export default LabTest