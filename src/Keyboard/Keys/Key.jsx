import React from 'react';

import css from './Keys.module.css';

function Key({
  letter,
  handleClick,
  correctLetters,
  presentLetters,
  usedLetters,
}) {
  const getClassToUse = (letter) => {
    const letterLowered = letter.toLowerCase();
    if (correctLetters.has(letterLowered)) {
      return css.correct;
    }
    if (presentLetters.has(letterLowered)) {
      return css.present;
    }
    if (usedLetters.has(letterLowered)) {
      return css.used;
    }

    return '';
  };

  return (
    <button
      className={`${css.key} ${getClassToUse(letter)}`}
      key={letter}
      onClick={handleClick}
    >
      {letter}
    </button>
  );
}

export default Key;
