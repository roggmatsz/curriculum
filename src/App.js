import { React, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [ users, setUsers ] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUsers((previousUsers) => {
      return [...previousUsers, { name: username, age: age, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList list={users}/>
    </div>
  );
}

export default App;
