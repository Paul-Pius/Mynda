import React from 'react';
import './labTest2.css';
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import SearchBar from '../../../components/my-component/search/SearchBar';
import VerifyCard from '../../../components/my-component/verifyCard/VerifyCard';
import lagoon from '../../../components/my-component/header/images/lagoon.svg';
import redcross from '../../../components/my-component/header/images/redcross.svg';
import people from '../../../components/my-component/header/images/people.svg';
import adjust from "../../../components/my-component/header/images/adjust.svg";
import { Link } from "react-router-dom";

const LabTest2 = () => {
  return (
        <>
            <Navbar2 
            text="Lab Test"
            boxSizing="border-box" 
            padding="2em 3em" />

            <div className='labtest-div'>
                <form className='labtest2'>
                    <p className='text-labtest2'>
                        Lab test/...
                    </p>

                    <div className='vcard-labtestlab'>
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

                    <p className='text-labtest3'>
                        Book appointment Date and Time for Lagoon hospital, Abuja
                    </p>

                    <div className='dateandtime'>

                        <p className='dateparagraph'>
                            Date and Time
                        </p>

                        <div className="inputdiv">
                            <input
                            type="date"
                            name="amount"
                            className="form-input-book"
                            /> 
                        </div>

                    </div>

                    <div className='screeningtest'>
                       <p className='testlist'> Maid screening Test List</p>
                    </div>

                    <div className='labtestfee'>
                        <p className='labtp'>
                            Lab Test Fee
                        </p>
                            # 25,000
                    </div>

                    <div>
                        <Link to="/mynda/selectmethod">
                            <button className="lodbtn-withdraw">
                                Proceed to payment
                            </button>
                        </Link>
                    </div>
                </form>

            </div>
       </>
  )
}

export default LabTest2;