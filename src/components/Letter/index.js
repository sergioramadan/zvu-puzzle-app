import React from 'react';
import O from './zoovu-o.svg';
import U from './zoovu-u.svg';
import V from './zoovu-v.svg';
import Z from './zoovu-z.svg';
import './letter.css';

function Letter({ letter }) {
  const letters = { O, U, V, Z };
  const letterImage = !!letter ? letters[letter.toUpperCase()] : '';

  return (
    <img className="letter"
      src={letterImage}
      alt={letter}
    />
  );
}

export default Letter;
