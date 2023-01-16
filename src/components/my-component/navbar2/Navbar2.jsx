import React from 'react';
import "./Navbar2.css";

const Navbar2 = (props) => {
  const { text, padding, background, fontSize, boxSizing } = props;
  return (
    <div className='navcontain'>
      <nav style={{ padding: padding, background: background, fontSize: fontSize, boxSizing: boxSizing }}>
        {text}
      </nav>
    </div>
  )
}

export default Navbar2;