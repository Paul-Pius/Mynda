import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './threedotsmenu.css';

import threedots from '../../../../src/components/my-component/img/threedots.png';

const ThreeDotsMenu = () => {


    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
  return (
    <div>
        <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={threedots}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <Link to="/mynda/lodgecomplain">
                <DropdownItem text = {"Lodge complaint"}/>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <a> {props.text} </a>
      </li>
    );
  }

export default ThreeDotsMenu;