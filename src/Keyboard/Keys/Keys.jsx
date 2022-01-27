import React from 'react';
import css from './Keys.module.css';

function Keys({ letters, lettersUsed, adornmentStart, adornmentEnd }) {
  return (
    <div className={css.row}>
      {adornmentStart}
      {letters
        .toUpperCase()
        .split('')
        .map((letter) => (
          <button className={css.key} key={letter}>
            {letter}
          </button>
        ))}
      {adornmentEnd}
    </div>
  );
}

export default Keys;
