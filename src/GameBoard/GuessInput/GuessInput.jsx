import React from 'react';

import css from './GuessInput.module.css';

function GuessInput({ current, guess, currentGuess }) {
  const Input = ({ letter, index }) => {
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
  };

  return (
    <div className={css.row}>
      {[...Array(5).keys()].map((index) => (
        <Input
          key={index}
          current={current}
          letter={currentGuess[index]}
          index={index}
        />
      ))}
    </div>
  );
}

export default GuessInput;
