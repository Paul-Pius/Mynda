import React from "react";
import "./search-bar.css";
import adjust from "../../../components/my-component/header/images/adjust.svg";
import searchi from "../../../components/my-component/header/images/searchi.svg";

function SearchBar({ placeholder }) {

	return (
    // <div className="searchbar">
      <div className="searchInput">
        <div className="searchIcon"><img src={searchi} alt="searchi"></img></div>
        <input type="text" placeholder={placeholder}/>
        
      </div>
    // </div>
  );
}

export default SearchBar;