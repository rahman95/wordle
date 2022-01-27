import React from 'react';
import css from './GuessInput.module.css';

function GuessInput({ guess }) {
  const guessSplit = guess.split('');

  return (
    <div>
      {[...Array(5).keys()].map((index) => (
        <input
          key={index}
          className={css.input}
          value={guessSplit[index] || ''}
          readOnly={true}
        />
      ))}
    </div>
  );
}

export default GuessInput;
