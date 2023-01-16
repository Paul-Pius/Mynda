import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./verify.css";


function Multi2() {

    const [check, setCheck] = useState(false);
   
    const MyCheck = () => {
        setCheck(!check)
    }

    return (
        <div className="container-verify">

            {
                check ? <div className="verifydiv" style={{borderColor: "#204ECF", background: "#204ECF"}} 
                onClick={MyCheck}>{check && <FontAwesomeIcon style={{color: "white"}} icon={faCheck}></FontAwesomeIcon>}
                </div> : <div className="verifydiv" onClick={MyCheck}>{check && <FontAwesomeIcon style={{ color: 'g#204ECF' }} icon={faCheck}></FontAwesomeIcon>}

                </div>
            }

        </div>
    )
}

export default Multi2;