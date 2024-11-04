import React from 'react';
import PropTypes from 'prop-types';
import styles from './Users.module.css';

function Users({ name, age, isAdmin }) {
  const users = [
    { id: 1, name: "John Doe", location: "Nairobi" },
    { id: 2, name: "Jane Doe", location: "Thika" },
    { id: 3, name: "Vick Doe", location: "Nakuru" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.name.value);
    console.log(e.target.location.value);
    console.log(e.target.email.value);
  }

  return (
    <div className={styles.Users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.location}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" id="username" name="username" />
        <input placeholder="Name" id="name" name="name" type="text" />
        <input placeholder="Location" id="location" name="location" type="text" />
        <input placeholder="Email" id="email" name="email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



export default Users;
