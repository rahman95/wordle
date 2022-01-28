import React from 'react';

import css from './GuessInput.module.css';

function Input({ current, letter, index, guess }) {
  const guessLetter = guess[index];

  return (
    <span
      className={`
        ${css.input}
        ${guessLetter?.isCorrect ? css.correct : ''}
        ${guessLetter?.isPresent ? css.present : ''}
        ${guessLetter?.isAbsent ? css.absent : ''}
      `}
    >
      {current ? letter : guessLetter?.letter}
    </span>
  );
}

function GuessInput({ current, guess, currentGuess }) {
  return (
    <div className={css.row}>
      {[...Array(5).keys()].map((index) => (
        <Input
          key={index}
          current={current}
          letter={currentGuess[index]}
          index={index}
          guess={guess}
        />
      ))}
    </div>
  );
}

export default GuessInput;
