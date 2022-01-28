import React from 'react';

import css from './WinLossOverlay.module.css';

function WinLossOverlay({ hasWon, hasFinished, wordOfDay }) {
  if (hasWon || hasFinished) {
    return (
      <div className={css.modal}>
        <div className={css.modalBox}>
          <h1>{hasWon ? 'GAME WON' : hasFinished ? 'GAME OVER' : ''}</h1>
          <p>
            The word was <b>{wordOfDay}</b>
          </p>
          <div className={css.buttonContainer}>
            <button>Share</button>
            <button>New Game</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default WinLossOverlay;
