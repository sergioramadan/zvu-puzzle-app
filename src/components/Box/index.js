import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './box.css';

function Box({ id, children }) {
  const { setCardMove } = useContext(GameContext);

  const drop = event => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('card');
    setCardMove({ cardId, boxId: id });
  };

  const dragOver = event => {
    event.preventDefault()
  };

  return (
    <div id={id}
      className="box"
      onDrop={drop}
      onDragOver={dragOver}
    >
      { children }
    </div>
  );
};

export default Box;
