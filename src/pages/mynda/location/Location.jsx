import React from "react";
import "./location.css";
import Navbar2 from "../../../components/my-component/navbar2/Navbar2";
import arrow from "../../../components/my-component/header/images/arrow.svg";
import { getUsers } from "../../../mock-data/Api";

const Location = () => {


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
            text="Location"
            boxSizing="border-box" 
            padding="2em 3em" /> 
        </div>

        <form>


              {
                users.map(user => {
                  return (
                    <div className="userstate" key={user.id}>
                        <p className="states">{user.state}</p>
                    </div>
                  )
                })
              }


        </form>
        
    </div>
  )
}

export default Location;