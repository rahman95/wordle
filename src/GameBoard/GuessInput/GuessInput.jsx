import React from 'react';
import css from './GuessInput.module.css';

function GuessInput({ current, guess, currentGuess }) {
  const Input = ({ letter, index }) => {
    const guessLetter = guess[index];

    return (
      <input
        className={`${css.input} ${guessLetter?.isPresent ? css.present : ''} ${
          guessLetter?.isCorrect ? css.correct : ''
        }`}
        value={current ? letter : guessLetter?.letter}
        readOnly={true}
      />
    );
  };

  return (
    <div>
      {[...Array(5).keys()].map((index) => (
        <Input current={current} letter={currentGuess[index]} index={index} />
      ))}
    </div>
  );
}

export default GuessInput;
