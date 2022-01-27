import React from 'react';
import css from './Keys.module.css';

function Keys({
  wordOfDay,
  letters,
  lettersUsed,
  adornmentStart,
  adornmentEnd,
  currentGuess,
  setCurrentGuess,
}) {
  const handleClick = (e) => {
    const key = e.target.textContent.toLowerCase();

    if (currentGuess.length === 5) {
      console.log('letters reached');
      return;
    }

    setCurrentGuess((currentGuess) => {
      return currentGuess + key;
    });
  };

  const Key = ({ letter }) => {
    return (
      <button className={css.key} key={letter} onClick={handleClick}>
        {letter}
      </button>
    );
  };

  return (
    <div className={css.row}>
      {adornmentStart}
      {letters
        .toUpperCase()
        .split('')
        .map((letter) => (
          <Key key={letter} letter={letter} />
        ))}
      {adornmentEnd}
    </div>
  );
}

export default Keys;
