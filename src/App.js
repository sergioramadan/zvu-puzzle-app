import React, { useContext } from 'react';
import UserRegistration from './components/UserRegistration';
import PuzzleGame from './components/PuzzleGame';
import { GameContext } from './context/GameContext';

function App() {
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

export default App;
