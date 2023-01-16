import React from 'react';
import './ButtonReuse.css';

const ButtonReuse = (props) => {

    const { text, 
        padding, 
        color, 
        backgroundColor, 
        border, 
        borderRadius,
        fontSize,
        height,
        fontWeight, 
        boxShadow } = props;
  return (
        <div
        style={{
        padding: padding,
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        fontSize: fontSize,
        height: height,
        fontWeight: fontWeight
        }} 
        >
            { text }
        </div>
  )
}

export default ButtonReuse;