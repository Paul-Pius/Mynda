import shadows from '@mui/material/styles/shadows';
import React from 'react';
import "./VerifyCard.css";

const VerifyCard = (props) => {

    const { text,
        padding,
        background,
        fontSize,
        width
    } = props;
    return (
        <div className='carddiv'>
            <div className='verifyrext' style={{
                padding: padding,
                background: background,
                fontSize: fontSize,
                width: width
            }}>
                {text}
            </div>
        </div>
    )
}

export default VerifyCard