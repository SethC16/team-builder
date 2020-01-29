import React, { useState } from 'react';
import './App.css';
import NewForm from './components/Form';
import Teammates from './components/Teammates';

function App() {
  const [member, setMember] = useState([
    { 
    name: 'Seth Cox',
    email: 'Sethcox16@yahoo.com',
    role: 'designer'  
    }
  ]);
  const addNewMember = team => {
    const newMember = {
      name: team.name,
      email: team.email,
      role: team.role
    };
    setMember([...member, newMember])
  }
  return (
    <div className="App">
        <h1>Team Members</h1>
        <NewForm addNewMember={addNewMember}/>
        <Teammates member={member}/>
    </div>
  );
}

export default App;
