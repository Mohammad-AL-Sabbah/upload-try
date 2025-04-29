import { useState } from 'react';
import User from './User';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CustomeButton from './shired/CustomeButton';


function App() {
  const [Users, SetUsers] = useState([
    { "id": 1, "name": "mohmmad", "age": 12, "email": "mohmmad@gmail.com" },
    { "id": 2, "name": "saleh", "age": 20, "email": "saleh@gmail.com" },
    { "id": 3, "name": "noor", "age": 15, "email": "noor@gmail.com" },
    { "id": 4, "name": "kareem", "age": 10, "email": "kareem@gmail.com" },
  ]);

  return (
    <div className="users">
     <CustomeButton text="add" type="primary"  />
      {Users.map(user => (
        <User key={user.id} name={user.name} age={user.age} email={user.email} />
      ))}
    </div>
  );
}


export default App;
