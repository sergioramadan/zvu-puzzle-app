import React from 'react';
import { GameProvider } from './context/GameContext';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <GameProvider>
      <MainContainer />
    </GameProvider>
  );
}

export default App;
