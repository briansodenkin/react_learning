import React, {useState} from "react";
import NewUser from "./Users/NewUser";
import UserList from "./Users/UserList";
function App() {
  const[userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList)=>{
      return [...prevList, {name:uName, age:uAge, id: Math.random().toString()}];
  });

  }
  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
