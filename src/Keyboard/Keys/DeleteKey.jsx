import React from 'react';

import css from './Keys.module.css';

function DeleteKey({ currentGuess, setCurrentGuess }) {
  const handleClick = () => {
    if (currentGuess.length === 0) {
      return;
    }

    setCurrentGuess((prevCurrentGuess) => {
      return prevCurrentGuess.slice(0, prevCurrentGuess.length - 1);
    });
  };

  return (
    <button className={`${css.key} ${css.adornedKey}`} onClick={handleClick}>
      DELETE
    </button>
  );
}

export default DeleteKey;
