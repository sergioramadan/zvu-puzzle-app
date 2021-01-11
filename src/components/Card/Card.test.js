import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

describe('<Card>', () => {
  test('renders correctly', () => {
    render(<Card />);
  });

  test('renders card element', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass('card')
  });

});