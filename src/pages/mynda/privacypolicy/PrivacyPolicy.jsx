import React from "react";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";

const PrivacyPolicy = () => {

  return (
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Privacy Policy"
            boxSizing="border-box" 
            padding="2em 3em" /> 
          </div>

          <div>
          <p className="termstext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quis in amet interdum velit proin tincidunt donec purus lobortis. Enim molestie amet imperdiet 
                elementum bibendum a. Dictum netus tincidunt at vitae varius id faucibus faucibus. Suspendisse 
                posuere massa in fames habitasse adipiscing dapibus etiam. Nunc urna vulputate at sagittis maecenas
                amet interdum. Non urna nunc quisque eu diam est. Consequat, enim auctor massa nunc est. Nunc ullamcorper
                in nullam hendrerit cursus. Nulla orci, lacus, ut pharetra orci ut tincidunt mauris.
                Risus tempor, leo morbi venenatis aenean habitant suscipit pellentesque orci. At vitae morbi quis facilisis 
                egestas ligula sapien.
                Feugiat vel sed ipsum ornare bibendum volutpat metus. Dolor viverra ornare nibh aliquet turpis. Nec, scelerisque 
                ultricies in ac nunc.
                Dictum aenean scelerisque non aenean leo enim nisl sed nisl. Cras nunc quis volutpat sed mauris.</p>
          </div>
    </div>
  )
}

export default PrivacyPolicy;