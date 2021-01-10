import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Box from './Box';
import Card from './Card';
import Letter from './Letter';
import Timer from './Timer';

function PuzzleGame() {
  const { gameState } = useContext(GameContext);
  
  const renderCards = cards =>
    cards.map(card => (
        <Card id={card.id} key={card.id}>
          <Letter letter={card.value} />
        </Card>
      )
    )

  const renderBoxes = boxes =>
    boxes.map(box => (
      <Box id={box.id} key={box.id} >
        { box.card && (
            <Card id={box.card.id}>
              <Letter letter={box.card.value} />
            </Card>
          )
        }
      </Box>
    ))

  return (
    <div className="game-container">
      <div class="two-cols left">
        <h2>Good luck, {gameState.name}!</h2>
        <p>Pick up the right cards</p>
      </div>
      <div class="two-cols right">
        <Timer time={gameState.timer} />
        <p>The faster the better!</p>
      </div>
      <div className="box-container one-col">
        { renderCards(gameState.cards) }
      </div>
      <p>... and drop them here to make the logo great again!</p>
      <div className="box-container one-col">
        { renderBoxes(gameState.slots) } 
      </div>
    </div>
  );
};

export default PuzzleGame;
