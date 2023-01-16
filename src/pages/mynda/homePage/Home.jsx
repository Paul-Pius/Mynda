import React, { useState, useEffect, useCallback } from "react";
import "./home.css";
import "./data.css";
import { Link } from "react-router-dom";
import "../../../assets/styles/global-styles.css";
import Header from "../../../components/my-component/header/Header";
import { getUsers } from "../../../mock-data/Api";

import { BiRightArrowAlt } from "react-icons/bi";
import kyc from "../../../pages/employer/home/images/kyc.svg";
import househelp from "../../../pages/employer/home/images/househelp.svg";
import cook from "../../../pages/employer/home/images/cook.svg";
import nurse from "../../../pages/employer/home/images/nurse.svg";
import driver from "../../../pages/employer/home/images/driver.svg";
import gardner from "../../../pages/employer/home/images/gardner.svg";
import bouncer from "../../../pages/employer/home/images/bouncer.svg";
import car from "../../../pages/employer/home/images/car.svg";
import head from "../../../components/my-component/navbar/Images/head.svg";
import SearchBar from "../../../components/my-component/search/SearchBar";
import serviceicon from "../../../pages/employer/home/images/serviceicon.svg";
import afrowoman from "../../../components/my-component/header/images/afrowoman.svg";
import first from "../../../components/my-component/header/cards/first.svg";
import second from "../../../components/my-component/header/cards/second.svg";
import heart from "../../../components/my-component/header/cards/heart.svg";
import home from "../../../components/my-component/bottomicons/home.svg";
import walet from "../../../components/my-component/bottomicons/walet.svg";
import heart2 from "../../../components/my-component/bottomicons/heart2.svg";
import walet2 from "../../../components/my-component/bottomicons/walet2.svg";
import more from "../../../components/my-component/bottomicons/more.svg";
import Profile from "../../../components/my-component/profilephoto/Profile";

function MyndaHomePage() {
    // let picture = head;
    // let icon = serviceicon;


      const [users, setUsers] = useState(null);

      const usersFunc = useCallback(async () => {
      try {
          const userData = await getUsers();
          setUsers(userData)
      } catch(error) {
        console.log(error)
      }
    }, [])

    useEffect(() => {
      usersFunc()
    }, [usersFunc])
    
    if (!users) {
      return null;
    }
    
    return (
      <>
        <div className="o-container">

          <div className="profilepixdiv">
            <Profile />
          </div>
            <Header></Header>
      
          <div className="container">
            <div className="searches">
                <div className="searchbar">
                    <SearchBar placeholder="Search for a service"/> 
                </div>
            </div>
  
            <section className="kyc-verification">
    
              <div>
                <h3>Complete your KYC Documentation to continue</h3>
                <Link to="/mynda/verification">
                    <button>Get started</button>
                </Link>
              </div>
              <div>
                <img src={kyc} alt="placeholder"></img>
              </div>
            </section>
  
            <div className="category-description">
              <h4>Category</h4>
              <a style={{color: "blue"}}href="/mynda/jobcategory">See all</a>
            </div>
  
            <section className="service-category">
              <div className="service-category-row">
                <Link to="/mynda/maids-helps">
                  <div className="h-help">
                    <img src={househelp} alt="placeholder"></img>
                  </div>
                </Link>
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
            </section>
            <session className="agency-category1">
                <div className="agency-category1-row">
                    <div className="category-category-col">
                        <img src={afrowoman} alt=""></img>
                    </div>
                </div>
            </session>
  
            <div className="category-description">
              <h4>Top trending jobs</h4>
              <a style={{color: "blue"}} href="/mynda/jobs">See all</a>
            </div>
            <section className="agency-category">

            {
                users.map(user => {
                  return (
                    <div className="userdiv" key={user.id}>
                      <div className="ib">
                        <div><img className="im" src={user.image} alt="skill"></img></div>
                        <Link to="/mynda/jobs">
                            <button className="userbtn">{user.status}</button>
                        </Link>
                      </div>
                      <div className="usertxt">
                        {user.title} <br />
                        <img src={user.locationicon} alt="locationicon"></img><span className="userspn">{user.location}</span> <br />
                        <img src={user.timeicon} alt="timeicon"></img><span className="userspn">{user.timeposted}</span>
                      </div>
                      <div className="vip">
                        <Link to="/mynda/jobs">
                            <p className="viptxt">{user.vip}</p>
                        </Link>
                      </div>
                      <div className="amount">
                        <span>{user.amount}</span>
                        <img src={user.vector} alt="vector"></img>
                      </div>
                    </div>
                  )
                })
              }

              {/* <div className="agency-category-row">
                <div className="agency-category-col">
                  
                </div>
                <div className="agency-category-col">
                  <div className="location-first">
                    <img src={first} alt="placeholder"></img>
                    <div className="empbtn">
                      <Link to="/mynda/jobs">
                        <div className="emptxt">Employer</div>
                      </Link>
                    </div>
                    <Link to="/mynda/jobs">
                        <div className="empbt3">
                            <div className="emptx3">VIP</div>
                        </div>
                    </Link>
                    <div className="hearts">
                      <img src={heart} alt="hearts"></img>
                    </div>
                  </div>
                  <div className="category-tag">
                  </div>
                </div>
              </div>
  
              <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={second} alt=""></img>
                    <div className="agnbtn">
                        <div className="agntxt">Agency</div>
                    </div>
                    <div className="hearts2">
                      <img src={heart} alt="hearts2"></img>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={first} alt=""></img>
                    <div className="empbtn2">
                      <Link to="/mynda/jobs">
                          <div className="emptxt2">Employer</div>
                      </Link>
                    </div>
                    <div className="hearts3">
                      <img src={heart} alt="hearts3"></img>
                    </div>
                  </div>
                </div>
                <div className="agency-category-col">
                  <div className="category-tag">
                  </div>
                </div>
              </div> */}
            </section>
  
            <section className="ad-category">
              <div className="ad-category-text">
                <h4>Transportation just got easier</h4>
                <div className="ad-category-text-2">
                  <p>Ride with bolt today</p>
                  <span>
                    <BiRightArrowAlt className="right-arrow" />
                  </span>
                </div>
              </div>
              <div className="ad-category-img">
                <img src={car} alt="placeholder"></img>
              </div>
            </section>
            <div style={{marginBottom: "1rem"}}>

            </div>
            <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={second} alt=""></img>
                    <div className="agnbtn2">
                        <div className="agntxt">Agency</div>
                    </div>
                    <div className="agnbtn3">
                        <div className="agntxt3">VIP</div>
                    </div>
                    <div className="hearts4">
                      <img src={heart} alt="hearts4"></img>
                    </div>
                  </div>
                </div>
            </div>

          </div>
          <div className="bottom-margin"></div>

          <div className="bottom">
              <div className="bottom-icons">
                <Link to="">
                    <div className="home">
                      <img className="" src={home} alt="home"></img>
                    </div>
                </Link>
                <Link to="/mynda/jobs">
                    <div className="walet">
                      <img className="" src={walet} alt="walet"></img>
                    </div>
                </Link>
                <Link to="/mynda/savedjobs">
                    <div className="heart2">
                      <img className="" src={heart2} alt="heart2"></img>
                    </div>
                </Link>
                <Link to="/mynda/wallet">
                    <div className="walet2">
                        <img className="" src={walet2} alt="walet2"></img>
                    </div>
                </Link>
                <Link to="/mynda/more">
                  <div className="more">
                    <img className="" src={more} alt="more"></img>
                  </div>
                </Link>
              </div>
            </div>
          <div>


          </div>
        </div>
      </>
    );
  }
  
  export default MyndaHomePage;
