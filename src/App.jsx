import { useState } from 'react';
import User from './User';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CustomeButton from './shired/CustomeButton';
import Input from './AddUser';
import UserDisplay from './User';

function App() {
  const [Users, SetUsers] = useState([
    { "id": 1, "name": "mohmmad", "age": 12, "email": "mohmmad@gmail.com" },
    { "id": 2, "name": "saleh", "age": 20, "email": "saleh@gmail.com" },
    { "id": 3, "name": "noor", "age": 15, "email": "noor@gmail.com" },
    { "id": 4, "name": "kareem", "age": 10, "email": "kareem@gmail.com" },
  ]);

  return (
    <div className="users mt-3 w-100 gap-4 justify-content-center align-items-center">
    <Input titleName = "Enter the name :" titleEmail = "Enter the email :" value = "Add User" Age = "Enter the age :"  />
    <div className="cards-parent d-flex gap-3 w-100 justify-content-center mt-4">
    {Users.map(user => (
        <User key={user.id} name={user.name} age={user.age} email={user.email} color = "primary" />
      ))}
    </div>
    
    </div>
  );
}


export default App;
