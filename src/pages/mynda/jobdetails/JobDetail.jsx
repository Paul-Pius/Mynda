import React from "react";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import Multi2 from "../../../components/my-component/verify/Verify";


const JobDetail = () => {
  return (
    <div>
        
        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Job Deteils"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        
          <Multi2 />
        

    </div>
  )
}

export default JobDetail;