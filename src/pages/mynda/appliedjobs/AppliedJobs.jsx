import React from "react";
import "./appliedjobs.css";
import { getUsers } from "../../../mock-data/Api";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import arrow from "../../../components/my-component/header/images/arrow.svg";
import { Link } from "react-router-dom";

const AppliedJobs = () => {

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
    <div>

        <div className="navdiv">
            <img className="arrow" src={arrow} alt=""></img>
            <Navbar2 
            text="Applied jobs"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form className="appliedjobs">

          <section className="agency-category1">

              {
                users.map(user => {
                  return (
                    <div className="userdiv" key={user.id}>
                      <div className="ib">
                        <div><img className="im" src={user.image} alt="skill"></img></div>
                        <Link to="">
                            <button className="userbtn">{user.status}</button>
                        </Link>
                      </div>
                      <div className="usertxt">
                        {user.title} <br />
                        <img src={user.locationicon} alt="locationicon"></img><span className="userspn">{user.location}</span> <br />
                        <img src={user.timeicon} alt="timeicon"></img><span className="userspn">{user.timeposted}</span>
                      </div>
                      <div className="vip">
                        <Link to="">
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
        </form>


    </div>
  )
}

export default AppliedJobs;