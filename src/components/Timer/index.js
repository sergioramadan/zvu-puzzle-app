import React from 'react';
// import Clock from './clock_icon-icons.svg';
import './timer.css';

function Timer({ time }) {
  return (
    <div className="timer">
      <span className="clock"></span>
      Your score: {time} seconds
    </div>
  )
}

export default Timer;
