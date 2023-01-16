import React from "react";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import SearchBar from "../../../components/my-component/search/SearchBar";
import { getUsers } from "../../../mock-data/Api";
import Modal2 from "../../../components/my-component/modal2/Modal2";
import Modal3 from "../../../components/my-component/modal3/Modal3";

import "./maids-helps.css";
import { Link } from "react-router-dom";



const MaidsHelp = () => {


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
            text="Maids/Helps"
            boxSizing="border-box" 
            padding="2em 3em" />
        </div>
        <div className="container-maid">
        <div className="searchdiv">
          <div className="searches">
              <div className="searchbar">
                  <SearchBar placeholder="Search location"/> 
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
                        <button className="userbtn">{user.status}</button>
                      </div>
                      <div className="usertxt">
                        {user.title} <br />
                        <img src={user.locationicon} alt="locationicon"></img><span className="userspn">{user.location}</span> <br />
                        <img src={user.timeicon} alt="timeicon"></img><span className="userspn">{user.timeposted}</span>
                      </div>
                      <div className="vip">
                        <p className="viptxt">{user.vip}</p>
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
        </div>
    </>
  )
}

export default MaidsHelp;