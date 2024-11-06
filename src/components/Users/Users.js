import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Users.module.css';
import User from '../User/User';
import Navbar from '../Navbar';

function Users({ name, age, isAdmin }) {
  const [email, setEmail] = useState("mike@moringaschool.com")
  const [username, setUsername] = useState()
  const [location, setLocation] = useState('')
  const [names, setName] = useState()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then((r) => r.json())
    .then((data) => {
       setUsers(data);
    })
  }, [])
  function handleSubmit(e) {
    e.preventDefault();
    const userObj = {
      username: username,
      name: names,
      email: email,
      location: location
    }
    fetch('http://localhost:3000/users',{
      "method":"POST",
      "headers":{
        "Content-Type":"application/json"
      },
      "body":JSON.stringify(userObj)
    })
    .then((r)=>(r.json()))
    .then((data)=>{
      console.log(data)
    })
    
  }
  const userInfo = users.map((userObj) => {
    return <User key={userObj.id} name={userObj.name} location={userObj.location} email={userObj.email}/>
  })
  return (
    <div className={styles.Users}>
      <header>
        <Navbar/>
      </header>
      <main>
      <ul>
        
        
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.location}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
        <input placeholder="Name" id="name" name="name" type="text" onChange={(e) => setName(e.target.value)}/>
        <input placeholder="Location" id="location" name="location" type="text" onChange={(e) => setLocation(e.target.value)}/>
        <input placeholder="Email" id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <div className='displayed data'>
        <ul>
          <li>{email}</li>
          <li>{username}</li>
          <li>{location}</li>
          <li>{names}</li>
        </ul>
      </div>
      </main>
    </div>
  );
}



export default Users;
