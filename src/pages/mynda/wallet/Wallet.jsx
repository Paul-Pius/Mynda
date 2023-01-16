import React from 'react';
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import './wallet.css';
import { Link } from 'react-router-dom';

import home from "../../../components/my-component/bottomicons/home.svg";
import walet from "../../../components/my-component/bottomicons/walet.svg";
import heart2 from "../../../components/my-component/bottomicons/heart2.svg";
import walet2 from "../../../components/my-component/bottomicons/walet2.svg";
import more from "../../../components/my-component/bottomicons/more.svg";

import withdraw from "../../../components/my-component/walet/withdraw.svg";
import send from "../../../components/my-component/walet/send.svg";
import out from "../../../components/my-component/walet/out.svg";
import moneyin from "../../../components/my-component/walet/moneyin.svg";
import SelectField from '../../../components/my-component/SelectField';
import Modal4 from '../../../components/my-component/modal4/Modal4';

const Wallet = () => {
  return (
    <>
        <div className='morecontainer'>
            <Navbar2 
            text="Wallet"
            boxSizing="border-box" 
            padding="2em 3em" />
        </div>

        <div className='balance'>
          
        </div>

            <div className='walettopup'>
                
            </div>
            <div className='topupmodal'>
                <Modal4 />
            </div>

            <div className='waletwithdraw'>
              <Link to="/mynda/withdrawfunds">
                  <img clasName="withdraw" src={withdraw} alt="withdraw"></img>
              </Link>
            </div>

            <div className='waletsend'>
              <Link to="/mynda/sendfunds">
                  <img clasName="send" src={send} alt="send"></img>
              </Link>
            </div>

            <div className='inputselect'>
                <div className='transaction'>
                    <p>Transaction History</p>
                </div>
                <div className='select'>
                    <SelectField
                    optionData={["today", "week", "month","year"]} 
                    />
                </div>
            </div>

            <div className='out'>
                <img className="arrowout" src={out} alt="out"></img>
            </div>

            <div className='in'>
               <img className="arrowin" src={moneyin} alt="moneyin"></img>
            </div>



        <div className="bottom">
              <div className="bottom-icons">
                <Link to="/mynda/homepage">
                    <div className="home">
                      <img className="" src={home} alt="home"></img>
                    </div>
                </Link>
                <div className="walet">
                  <img className="" src={walet} alt="walet"></img>
                </div>
                <div className="heart2">
                  <img className="" src={heart2} alt="heart2"></img>
                </div>
                <div className="walet2">
                  <img className="" src={walet2} alt="walet2"></img>
                </div>
                <div className="more">
                  <img className="" src={more} alt="more"></img>
                </div>
              </div>
            </div>
    </>
  )
}

export default Wallet;