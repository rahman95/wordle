import React from 'react';

import css from './Keys.module.css';

function SubmitKey({ currentGuess, submitGuess }) {
  const handleClick = () => {
    if (currentGuess.length !== 5) {
      return;
    }

    submitGuess(currentGuess);
  };

  return (
    <button className={css.adornedKey} onClick={handleClick}>
      ENTER
    </button>
  );
}

export default SubmitKey;
