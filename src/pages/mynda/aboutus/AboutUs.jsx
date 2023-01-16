import React from "react";
import "./aboutus.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";

const AboutUs = () => {

  return (
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="About Us"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form className="aboutusform">
          <div className="aboutusdiv">
            
          </div>

          <div className="abtusheader">
            <h3><span className="who">Who</span> We Are</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, lacus ultrices viverra amet mattis quis ullamcorper. Nisi, in turpis est elementum eget tortor pellentesque at quam. Purus arcu cursus 
            </p>
            <h3><span className="our">Our</span> Values</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, lacus ultrices viverra amet mattis quis ullamcorper. Nisi, in turpis est elementum eget tortor pellentesque at quam. Purus arcu cursus 
            </p>
            <h3><span className="our2">Our</span> Mission</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, lacus ultrices viverra amet mattis quis ullamcorper. Nisi, in turpis est elementum eget tortor pellentesque at quam. Purus arcu cursus 
            </p>
          </div>
        </form>
    </div>

  )
}

export default AboutUs;