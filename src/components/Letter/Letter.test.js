import React from 'react';
import { render } from '@testing-library/react';
import Letter from './index';

describe('<Letter>', () => {
  test('renders correctly', () => {
    render(<Letter />);
  });

  test('renders letter element', () => {
    const { container } = render(<Letter />);
    expect(container.firstChild).toHaveClass('letter')
  });
});