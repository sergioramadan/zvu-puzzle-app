import React, { useState, useEffect } from 'react';

const GameContext = React.createContext({});

function GameProvider(props) {

  const initialState = {
    name: '',
    timer: 0,
    correct: 0,
    answer: ['Z', 'O', 'O', 'V', 'U'],
    running: false,
    cards: [
      { id: 'card-1', value: 'Z' },
      { id: 'card-2', value: 'O' },
      { id: 'card-3', value: 'O' },
      { id: 'card-4', value: 'V' },
      { id: 'card-5', value: 'U' }
    ].sort((a ,b) => 0.5 - Math.random()),
    slots: [
      { id: 'slot-1', card: null },
      { id: 'slot-2', card: null },
      { id: 'slot-3', card: null },
      { id: 'slot-4', card: null },
      { id: 'slot-5', card: null }
    ]
  };

  const [gameState, setGameState] = useState({ ...initialState });

  const restartGame = () => {
    setGameState({
      ...initialState,
      name: gameState.name,
      running: false,
      timer: 0
    });
  };

  const setGameStart = () => setGameState({ ...gameState, running: true });

  useEffect(() => {
    if (gameState.running) {
      const timer = setTimeout(() => {
        setGameState({ ...gameState, timer: gameState.timer + 1 });
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  const setPlayerName = (name) => {
    setGameState({ ...gameState, name });
  };

  const getMovedCard = (cardId) => {
    let getUnusedCard = gameState.cards.find(card => card.id === cardId);
    if (getUnusedCard) {
      return getUnusedCard;
    } else {
      const getCardSlot = gameState.slots.find(slot => slot.card?.id === cardId);
      return getCardSlot.card;
    }
  };

  const getBoxById = (boxId) => {
    return gameState.slots.find(box => box.id === boxId);
  };

  const checkGameStatus = (gameState) => {
    const valArray = gameState.slots.map(slot => slot.card?.value);
    let rightLetters = 0;
    
    for (let index = 0; index < gameState.answer.length; index++) {
      if (valArray[index] === gameState.answer[index])
        rightLetters++;
    }
   
    if (rightLetters <= gameState.correct)
      gameState.timer = gameState.timer + 10;
    else
      gameState.correct = rightLetters;
    if (rightLetters === 5)
      gameState.running = false;
    
    return gameState;
  };

  const moveCard = (cardId, boxId, newGameState) => {
    const movedCard = getMovedCard(cardId);
    newGameState.cards = newGameState.cards.filter(card => card.id !== cardId);
    newGameState.slots = newGameState.slots.map(slot => (
      slot.id === boxId ? { ...slot, card: movedCard } 
        : slot.card?.id === cardId ? { ...slot, card: null } : slot
    ));
    return newGameState;
  };

  const setCardMove = ({ cardId, boxId }) => {
    const box = getBoxById(boxId);
    if (box.card)
      return;
    
    let newGameState = { ...gameState };
    newGameState = moveCard(cardId, boxId, newGameState);
    newGameState = checkGameStatus(newGameState);
    setGameState(newGameState);

    if(!newGameState.running)
      setTimeout(() => {
        restartGame();
      }, 10000);
  };

  return (
    <GameContext.Provider value={{
      gameState,
      setGameState,
      setPlayerName,
      setCardMove,
      setGameStart
    }}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
