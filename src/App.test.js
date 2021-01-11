import React from 'react';
// import reactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { GameProvider } from './context/GameContext';
import App from './App';

describe('<App>', () => {

  test('renders correctly', () => {
    render(<GameProvider><App /></GameProvider>);
  });

  test('displays informartion', () => {
    const { getByText } = render(<GameProvider><App /></GameProvider>);
    const formLabel = getByText(/Hello friend, tell me your name.../);
    expect(formLabel).toBeInTheDocument();
  });
});
