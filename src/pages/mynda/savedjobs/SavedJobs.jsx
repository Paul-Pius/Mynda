import React from "react";
import "../../../assets/styles/global-styles.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import SearchBar from "../../../components/my-component/search/SearchBar";
import { getUsers } from "../../../mock-data/Api";
import "./savedjobs.css";
import { Link } from "react-router-dom";
import heart from "../../../components/my-component/header/cards/heart.svg";
import first from "../../../components/my-component/header/cards/first.svg";
import skill from "../../../components/my-component/header/cards/skill.svg";
import nurse from "../../../components/my-component/header/cards/nurse.svg";
import agent from "../../../components/my-component/header/images/agent.svg";
import home from "../../../components/my-component/bottomicons/home.svg";
import walet from "../../../components/my-component/bottomicons/walet.svg";
import heart2 from "../../../components/my-component/bottomicons/heart2.svg";
import walet2 from "../../../components/my-component/bottomicons/walet2.svg";
import more from "../../../components/my-component/bottomicons/more.svg";


function SavedJobs () {

  const [users, setUsers] = React.useState(null);

        const myUsers = React.useCallback(async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData)
            }
            catch(error) {
                console.log(error);
            }

        }, [])

        React.useEffect(() => {
            myUsers();
          }, [myUsers]);
        
          if (!users) {
            return null;
          }

	return (
    <>
      <div className="navmaid">
            <Navbar2 
            text="Saved Jobs"
            boxSizing="border-box" 
            padding="2em 3em" />
        </div>
        <div className="container-maid">
        <div className="searchdiv">
          <div className="searches">
              <div className="searchbar">
                  <SearchBar placeholder="Search in jobs"/> 
              </div>
          </div>
        </div>

            <section className="agency-category1">

            {
                users.map(user => {
                  return (
                    <div className="userdiv" key={user.id}>
                      <div className="ib">
                        <div><img className="im" src={user.image} alt="skill"></img></div>
                        <Link to="/mynda/jobdetails">
                            <button className="userbtn">{user.status}</button>
                        </Link>
                      </div>
                      <div className="usertxt">
                        {user.title} <br />
                        <img src={user.locationicon} alt="locationicon"></img><span className="userspn">{user.location}</span> <br />
                        <img src={user.timeicon} alt="timeicon"></img><span className="userspn">{user.timeposted}</span>
                      </div>
                      <div className="vip">
                        <Link to="/mynda/jobdetails">
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
                    <img src={skill} alt="placeholder"></img>
                    <div className="empbtn">
                        <div className="emptxt">Employer</div>
                    </div>
                    <div className="empbtn3">
                        <div className="emptxt3">VIP</div>
                    </div>
                    <div className="heart">
                      <img src={heart} alt="heart"></img>
                    </div>
                  </div>
                  <div className="category-tag">
                  </div>
                </div>
              </div>
  
              <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={agent} alt=""></img>
                    <div className="agnbtn">
                        <div className="agntxt">Agency</div>
                    </div>
                    <div className="agntbtn1">
                        <div className="agntxt1">VIP</div>
                    </div>
                    <div className="heart2">
                      <img src={heart} alt="heart"></img>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="agency-category-row">

                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={first} alt=""></img>
                    <div className="empbtn2">
                        <div className="emptxt2">Employer</div>
                    </div>
                    <div className="empbtn1">
                          <div className="emptxt1">VIP</div>
                      </div>
                    <div className="heart3">
                      <img src={heart} alt="heart"></img>
                    </div>
                  </div>
                </div>
                <div className="agency-category-col">
                  <div className="category-tag">
                  </div>
                </div>
              </div>

              <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={nurse} alt=""></img>
                    <div className="agnbtn">
                        <div className="agntxt">Agency</div>
                    </div>
                    <div className="agntbtn1">
                        <div className="agntxt1">VIP</div>
                    </div>
                    <div className="heart4">
                      <img src={heart} alt="heart"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="agency-category-row">
                <div className="agency-category-col">
                  <div>
                    <img className="agency-img" src={agent} alt=""></img>
                    <div className="agnbtn">
                        <div className="agntxt">Agency</div>
                    </div>
                    <div className="agntbtn1">
                        <div className="agntxt1">VIP</div>
                    </div>
                    <div className="heart2">
                      <img src={heart} alt="heart"></img>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

            
            <div className="buttspace"></div>
        </div>
            <div className="bottom">
              <div className="bottom-icons">
                <Link to="/mynda/homepage">
                    <div className="home">
                      <img className="" src={home} alt="home"></img>
                    </div>
                </Link>
                <div className="walet">
                  <img className="" src={walet} alt="walet"></img>
                </div>
                <div className="heart2">
                  <img className="" src={heart2} alt="heart2"></img>
                </div>
                <div className="walet2">
                  <img className="" src={walet2} alt="walet2"></img>
                </div>
                <div className="more">
                  <img className="" src={more} alt="more"></img>
                </div>
              </div>
            </div>
    </>
  );
}

export default SavedJobs;