import React from 'react';

import css from './WinLossOverlay.module.css';

function WinLossOverlay({
  hasWon,
  hasFinished,
  wordOfDay,
  generateShareArt,
  refreshPage,
}) {
  const modalTitle = () => {
    if (hasWon) {
      return 'GAME WON ✅';
    }
    if (hasFinished) {
      return 'GAME OVER ❌';
    }
    return null;
  };

  if (hasWon || hasFinished) {
    return (
      <div className={css.modal}>
        <div className={css.modalBox}>
          <h1>{modalTitle()}</h1>
          <p>
            The word was <b>{wordOfDay}</b> ✨
          </p>
          <div className={css.buttonContainer}>
            <button
              className={css.button}
              onClick={generateShareArt}
              type="button"
            >
              Share
            </button>
            <button className={css.button} onClick={refreshPage} type="button">
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default WinLossOverlay;
