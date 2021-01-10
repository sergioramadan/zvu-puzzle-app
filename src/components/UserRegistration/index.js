import React, { useState, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './userRegistration.css';

function UserRegistration () {
  const { setPlayerName } = useContext(GameContext);
  const [name, setName] = useState('');
  
  const onChange = (event) => {
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setPlayerName(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Hello friend, tell me your name...</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name here"
        required
        value={name}
        onChange={onChange}
      />
      <button type="submit">Let's go &rarr;</button>
    </form>
  );
}

export default UserRegistration;
