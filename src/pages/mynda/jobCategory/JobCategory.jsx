import React from "react";
import '../../../assets/styles/global-styles.css';
import './jobcat2.css';
import './jobcat.css';
import arrowL from "../../../assets/images/arrowL.svg";

import househelp from '../../../components/my-component/header/images/househelp.svg';
import driver from '../../../components/my-component/header/images/driver.svg';
import gardner from '../../../components/my-component/header/images/gardner.svg';
import cook from '../../../components/my-component/header/images/cook.svg';
import nurse from '../../../components/my-component/header/images/nurse.svg';
import bouncer from '../../../components/my-component/header/images/bouncer.svg';
import bodyguard from '../../../components/my-component/header/images/bodyguard.svg';
import drycleaner from '../../../components/my-component/header/images/drycleaner.svg';
import messenger from '../../../components/my-component/header/images/messenger.svg';
import teacher from '../../../components/my-component/header/images/teacher.svg';

function JobCategory () {
	return (
    <>
      <div className="job-category-header">
        <div>
          <a href= "/mynda/homepage">
            <img src={arrowL} alt="back"></img>
          </a>
        </div>
        <h4>Service Category</h4>
      </div>
      <div className="container">
        <div className="job-search-bar">
          <input type="select" placeholder="Search job category"></input>
        </div>
        <section className="job-category">
          <div className="service-category-row">
            <div className="h-help">
              <img src={househelp} alt="placeholder"></img>
            </div>
            <div className="c-cook">
              <img src={cook} alt="placeholder"></img>
            </div>
            <div className="nurses">
              <img src={nurse} alt="placeholder"></img>
            </div>
          </div>
          <div className="service-category-row">
            <div className="driver">
              <img src={driver} alt="placeholder"></img>
            </div>
            <div className="gardner">
              <img src={gardner} alt="placeholder"></img>
            </div>
            <div className="bouncer">
              <img src={bouncer} alt="placeholder"></img>
            </div>
          </div>
          <div className="service-category-row">
            <div className="drycleaner">
              <img src={drycleaner} alt="placeholder"></img>
            </div>
            <div className="bodyguard">
              <img src={bodyguard} alt="placeholder"></img>
            </div>
            <div className="teacher">
              <img src={teacher} alt="placeholder"></img>
            </div>
          </div>
          <div className="job-category-row">
            <div className="messenger">
              <img src={messenger} alt="placeholder"></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default JobCategory;