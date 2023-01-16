import React from 'react';
import "./notification.css";
import Navbar2 from '../../../components/my-component/navbar2/Navbar2';
import { getUsers } from "../../../mock-data/Api";

const NotificationMynda = () => {


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

      <div className='navdiv'>
        <Navbar2 
        text="Notification"
        boxSizing="border-box" 
        padding="2em 3em"
        />
      </div>


<section>

{
  users.map(user => {
    return (
      <div className="maindv">
        <div className="usermessage" key={user.id}>
            <div className="senderimage">
              <img className="sndimg" src={user.senderimage} alt="sender"></img>
              <span className="sndname">{user.notification}</span>
              {/* <span className="sndtime">{user.time}</span> */}
              <span className="sndmessage">{user.notificationdate}</span>
            </div>
        </div>
      </div>
    )
  })
}

</section>

    </div>
  )
}

export default NotificationMynda;