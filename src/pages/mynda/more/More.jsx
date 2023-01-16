import React from 'react';
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import { Link } from 'react-router-dom';
import "./more.css";

import arrow from "../../../components/my-component/header/images/arrow.svg";
import acctsetting from "../../../components/my-component/walet/acctsetting.svg";
import sub from "../../../components/my-component/walet/sub.svg";
import apply from "../../../components/my-component/walet/apply.svg";
import traiservices from "../../../components/my-component/walet/traiservices.svg";
import about from "../../../components/my-component/walet/about.svg";
import support from "../../../components/my-component/walet/support.svg";
import rate from "../../../components/my-component/walet/rate.svg";

const More = () => {
  return (
    <div>


          <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="More"
            boxSizing="border-box" 
            padding="2em 3em" /> 
          </div>

          <form>

            <Link to ="/mynda/accountsettings">
                <div className='acctsetting'>
                    <img src={acctsetting} alt="acctsetting"></img>
                </div>
            </Link>

              <div className='sub'>
                  <img src={sub} alt="sub"></img>
              </div>
            
            <Link to="/mynda/appliedjobs">
              <div className='apply'>
                  <img src={apply} alt="apply"></img>
              </div>
            </Link>

            <Link to="/mynda/training">
              <div className='traiservices'>
                  <img src={traiservices} alt="traiservices"></img>
              </div>
            </Link>

            <Link to="/mynda/aboutus">
              <div className='about'>
                  <img src={about} alt="about"></img>
              </div>
            </Link>    

              <div className='supportrate'>
                <Link to="/mynda/support">
                    <div className='support'>
                        <img src={support} alt="support"></img>
                    </div>
                </Link>

                  <div className='rate'>
                      <img src={rate} alt="rate"></img>
                  </div>
              </div>

          </form>

    </div>
  )
}

export default More;