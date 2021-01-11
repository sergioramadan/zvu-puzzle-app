import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import { GameContext, GameProvider } from './GameContext';

describe("<GameContext />", () => {
  test("User Name is empty string by default", () => {
    const { getByText } = render(
      <GameProvider>
        <GameContext.Consumer>
          { ({ gameState }) => <span>Name: '{gameState.name.toString()}'</span> }
        </GameContext.Consumer>
      </GameProvider>
    );

    expect(getByText("Name: ''")).toBeTruthy();
  });

  test("User Name can be changed", () => {
    const name = "Arthur";
    const { getByText } = render(
      <GameProvider>
        <GameContext.Consumer>
          { ({ gameState, setPlayerName }) => (
              <>
                <span>Name: '{gameState.name.toString()}'</span>
                <button onClick={() => setPlayerName(name)}>Change Name</button>
              </>
            ) 
          }
        </GameContext.Consumer>
      </GameProvider>
    );

    fireEvent.click(getByText("Change Name"))
    expect(getByText("Name: 'Arthur'")).toBeTruthy();
  });

  test("User Name can be changed", () => {
    const name = "Arthur";
    const { getByText } = render(
      <GameProvider>
        <GameContext.Consumer>
          { ({ gameState, setPlayerName }) => (
              <>
                <span>Name: '{gameState.name.toString()}'</span>
                <button onClick={() => setPlayerName(name)}>Change Name</button>
              </>
            ) 
          }
        </GameContext.Consumer>
      </GameProvider>
    );

    fireEvent.click(getByText("Change Name"))
    expect(getByText("Name: 'Arthur'")).toBeTruthy();
  });

});