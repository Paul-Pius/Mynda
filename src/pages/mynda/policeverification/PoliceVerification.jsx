import React from 'react';
import './policeVerification.css';
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import VerifyCard from '../../../components/my-component/verifyCard/VerifyCard';
import policebadge from '../../../components/my-component/header/images/policebadge.svg';
import ButtonReuse from '../../../components/my-component/button/ButtonReuse';
import SearchBar from '../../../components/my-component/search/SearchBar';
import arrow from "../../../components/my-component/header/images/arrow.svg";


const PoliceVerification = () => {

  return (
      <>
        <img className="arrow" src={arrow} alt=""></img>
        <Navbar2 
        text="Police Verification"
        boxSizing="border-box" 
        padding="2em 3em" />
        <div className='verification-contain-police'>
            <form>
                
                <p className='text-police'>
                    Visit any of the listed police center below,
                    run a background check and upload a
                    signed police clearance form.
                </p>

                <div className='buttonReuse'>
                    <ButtonReuse 
                    text="+ Upload Clearance Form" 
                    borderRadius="5px" 
                    backgroundColor="#204ECF"
                    color="#fff"
                    boxShadow="0px 5px 10px 2px rgba(54, 74, 255, 0.1)"
                    fontSize="18px"
                    fontWeight="600"
                    height="40px"
                    padding="20px 0px 0px 0px"/>
                </div>
             
                    <div className="searches">
                        <div className="searchbar">
                            <SearchBar placeholder="Search location"/> 
                        </div>
                    </div>

                <div className='vcard-police'>
                    <img className="policebadge" src={policebadge} alt="policebadge"></img>
                    <h4 className='header-police'>Gwagwalada Police Station</h4>
                    <VerifyCard
                        text="Federal Secretariat Complex, Shehu 
                        Shagari Road, Central Business
                        District Abuja Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-police2'>
                    <img className="policebadge2" src={policebadge} alt="policebadge2"></img>
                    <h4 className='header-police2'>Zone 2 Command Head Office</h4>
                    <VerifyCard
                        text="CCR3+QJ5, King George V Road,
                        CMS, Lagos Islan 102273, Lagos
                        Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-police3'>
                    <img className="policebadge3" src={policebadge} alt="policebadge3"></img>
                    <h4 className='header-police3'>Gwagwalada Police Station</h4>
                    <VerifyCard
                        text="Federal Secretariat Complex, Shehu 
                        Shagari Road, Central Business
                        District Abuja Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-police4'>
                    <img className="policebadge4" src={policebadge} alt="policebadge4"></img>
                    <h4 className='header-police4'>Zone 2 Command Head Office</h4>
                    <VerifyCard
                        text="CCR3+QJ5, King George V Road,
                        CMS, Lagos Islan 102273, Lagos
                        Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>

                <div className='vcard-police5'>
                    <img className="policebadge5" src={policebadge} alt="policebadge5"></img>
                    <h4 className='header-police5'>Gwagwalada Police Station</h4>
                    <VerifyCard
                        text="Federal Secretariat Complex, Shehu 
                        Shagari Road, Central Business
                        District Abuja Nigeria"
                        background="#FFFFFF"
                        padding="2.2rem 2rem 2em 3.5em"
                    />
                </div>
            </form>
        </div>
    </>
  )
}

export default PoliceVerification;