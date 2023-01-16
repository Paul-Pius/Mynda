import React from "react";
import "./mountainmaid.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import maids from "../../../components/my-component/training/maids.svg";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import tik from "../../../components/my-component/training/tik.svg";
import elipse2 from "../../../components/my-component/training/elipse2.svg";
import Modal9 from "../../../components/my-component/modal9/Modal9";
import { Link } from "react-router-dom";

const MountainMaid = () => {

  return (
    <div className="mountainmaidcon">
        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Mountain Maid Training Center"
            boxSizing="border-box" 
            padding="2em 5em" /> 
        </div>

        <form className="mountainmaidform">
            <div>
                <div className="trdiv1">
                    <img className="maids" src={maids} alt="maids"></img>
                    <h3 className="mountainabout">About Us</h3>
                    <p className="mountainmaid">
                        Lorem ipsum dolor sit amet, consectetur til adipiscing elit. Sodales habitant placerat vil posuere tortor, vestibulum cursus ac. Velit a cursus nisi, integer. 
                    </p>
                </div>
            </div>

            <div>
                <div className="trdiv2">
                   
                    <h3 className="mountainabout">Class Details - International Food</h3>
                    <p className="mountainmaid">
                        In this class the following and also get certified.
                    </p>
                    <div className="tikdiv">
                        <img src={tik} alt="tik"></img> <p>How to cook international food</p>
                    </div>
                    <div className="tikdiv">
                        <img src={tik} alt="tik"></img> <p>How to clean properly</p>
                    </div>
                    <div className="tikdiv">
                        <img src={tik} alt="tik"></img> <p>Learning good english</p>
                    </div>
                    <hr />
                    <p className="headl">Location</p>
                    <div className="tikdiv">
                        <img src={elipse2} alt="tik"></img><p>Offline/remote</p>
                    </div>
                    <div className="tikdiv">
                        <img src={elipse2} alt="tik"></img><p>Onsite</p>
                    </div>
                    <hr />
                    <p className="headl">
                        Price
                    </p>
                    <div className="headl">
                        <h3># 40,000</h3>
                    </div>

                    <div>
                        <div className="trdiv3">
                            <h3 className="mountainabout">Contact Details</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="applybtn">
                <Modal9 />
            </div>
        </form>
    </div>

  )
}

export default MountainMaid;