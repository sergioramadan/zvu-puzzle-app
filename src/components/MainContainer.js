import React, { useContext } from 'react';
import UserRegistration from './UserRegistration';
import PuzzleGame from './PuzzleGame';
import { GameContext } from '../context/GameContext';

function MainContainer() {
  const { gameState } = useContext(GameContext);

  return (
    <div className="main-container">
      { !gameState.name ?
        <UserRegistration /> :
        <PuzzleGame />
      }
    </div>
  );
}

export default MainContainer;
