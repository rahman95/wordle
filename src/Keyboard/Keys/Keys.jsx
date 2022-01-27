import React from 'react';
import Key from './Key';

import css from './Keys.module.css';

function Keys({
  correctLetters,
  presentLetters,
  usedLetters,
  letters,
  adornmentStart,
  adornmentEnd,
  currentGuess,
  setCurrentGuess,
}) {
  const handleClick = (e) => {
    const key = e.target.textContent.toLowerCase();

    if (currentGuess.length === 5) {
      return;
    }

    setCurrentGuess((currentGuess) => {
      return currentGuess + key;
    });
  };

  return (
    <div className={css.row}>
      {adornmentStart}
      {letters
        .toUpperCase()
        .split('')
        .map((letter) => (
          <Key
            key={letter}
            letter={letter}
            handleClick={handleClick}
            correctLetters={correctLetters}
            presentLetters={presentLetters}
            usedLetters={usedLetters}
          />
        ))}
      {adornmentEnd}
    </div>
  );
}

export default Keys;
