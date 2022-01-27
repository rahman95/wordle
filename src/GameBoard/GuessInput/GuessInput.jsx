import React from 'react';

import css from './GuessInput.module.css';

function GuessInput({ current, guess, currentGuess }) {
  const Input = ({ letter, index }) => {
    const guessLetter = guess[index];

    return (
      <span
        className={`${css.input} ${guessLetter?.isPresent ? css.present : ''} ${
          guessLetter?.isCorrect ? css.correct : ''
        }`}
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
