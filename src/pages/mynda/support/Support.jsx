import React from "react";
import "./support.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";
import supportbrk from "../../../components/my-component/supportbrk/supportbrk.svg";
import call from "../../../components/my-component/supportbrk/call.svg";
import sendmail from "../../../components/my-component/supportbrk/sendmail.svg";

const Support = () => {

  return (

    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Support"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form>
            <div>
                <img src={supportbrk} alt="support"></img>
            </div>

            <div className="call">
                <img src={call} alt="call"></img>
            </div>

            <div className="sendmail">
                <img src={sendmail} alt="sendmail"></img>
            </div>
        </form>

    </div>
  )
}

export default Support;