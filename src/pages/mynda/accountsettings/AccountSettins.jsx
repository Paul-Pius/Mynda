import React from "react";
import "./accountsettings.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";
import profilesetting from "../../../components/my-component/accountsetting/profilesetting.svg";
import passwordsetting from "../../../components/my-component/accountsetting/passwordsetting.svg";
import privacypolicy from "../../../components/my-component/accountsetting/privacypolicy.svg";
import terms from "../../../components/my-component/accountsetting/terms.svg";
import logout from "../../../components/my-component/accountsetting/logout.svg";
import { Link } from "react-router-dom";
import Modal8 from "../../../components/my-component/modal8/Modal8";

const AccountSettins = () => {

  return (

    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Account Settings"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>
        

        <form>
            
            <Link to="/mynda/profiledetails">
                <div className='profilesetting'>
                    <img src={profilesetting} alt="acctset"></img>
                </div>
            </Link>

            <div className='passwordsetting'>
                <Modal8 />
            </div>

            <Link to="/mynda/privacypolicy">
                <div className='privacypolicy'>
                    <img src={privacypolicy} alt="privacypolicy"></img>
                </div>
            </Link>

            <Link to="/mynda/termscondition">
                <div className='terms'>
                    <img src={terms} alt="terms"></img>
                </div>
            </Link>

            <Link to="/mynda/login">
                <div className='logout'>
                    <img src={logout} alt="logout"></img>
                </div>
            </Link>

        </form>

    </div>
  )
}

export default AccountSettins;