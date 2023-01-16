import React from "react";
import "../../../assets/styles/global-styles.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import SearchBar from "../../../components/my-component/search/SearchBar";
import "./jobs.css";
import { Link } from "react-router-dom";
import { getUsers } from "../../../mock-data/Api";
import home from "../../../components/my-component/bottomicons/home.svg";
import walet from "../../../components/my-component/bottomicons/walet.svg";
import heart2 from "../../../components/my-component/bottomicons/heart2.svg";
import walet2 from "../../../components/my-component/bottomicons/walet2.svg";
import more from "../../../components/my-component/bottomicons/more.svg";
import Modal2 from "../../../components/my-component/modal2/Modal2";
import Modal3 from "../../../components/my-component/modal3/Modal3";


function Jobs () {


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
              text="Jobs"
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

        <div className="dropdiv">
          <Link to="/mynda/location">
            <div style={{marginRight: "15rem"}}>
              <div className="locationjob">
                  <p>Loation</p>
              </div> 
            </div>
          </Link>

          <div>
            <Modal2 />
          </div>

          <div>
            <Modal3 />
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

export default Jobs;