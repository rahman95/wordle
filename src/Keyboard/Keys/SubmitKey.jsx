import React from 'react';

import css from './Keys.module.css';

function SubmitKey({ currentGuess, submitGuess }) {
  const handleClick = () => {
    submitGuess(currentGuess);
  };

  return (
    <button
      className={`${css.key} ${css.adornedKey}`}
      onClick={handleClick}
      type="button"
    >
      ENTER
    </button>
  );
}

export default SubmitKey;
