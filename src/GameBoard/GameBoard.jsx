import React from 'react';
import GuessInput from './GuessInput/GuessInput';

import css from './GameBoard.module.css';

function GameBoard({ guesses, currentGuess }) {
  return (
    <section className={css.gameBoard}>
      {[...Array(6).keys()].map((index) => (
        <GuessInput
          current={index === guesses.length}
          key={index}
          guess={guesses[index] || ''}
          currentGuess={currentGuess}
        />
      ))}
    </section>
  );
}

export default GameBoard;
