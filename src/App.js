import NewUser from "./Components/NewUser";
import { useState } from "react";
import Users from "./Components/Users";
const App = () => {

  const [usersArray, setUsersArray] = useState([])

  const onAddNewUser = (newUser) => {
    setUsersArray((prevUsers) => {
      return [newUser, ...prevUsers]
    })
    console.log(usersArray)
  }

  return (
    <div>
          <NewUser onAddNewUser={onAddNewUser}/>
          <Users usersArray={usersArray} />
    </div>
  );
}

export default App;
