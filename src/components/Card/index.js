import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './card.css';

function Card({ id, children }) {
  const { setGameStart } = useContext(GameContext);

  const dragStart = ({ target, dataTransfer }) => {
    setGameStart();
    dataTransfer.setData('card', id);
    setTimeout(() => { target.class = "card moving" }, 0);
  };

  const dragEnd = ({ target }) => {
    setTimeout(() => { target.class = "card" }, 0);
  };

  return (
    <div id={id}
      className="card"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      draggable="true"
    >
      {children}
    </div>
  );
}

export default Card;
