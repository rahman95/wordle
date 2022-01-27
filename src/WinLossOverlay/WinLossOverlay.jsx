import React from 'react';

function WinLossOverlay({ hasWon, guessCount }) {
  if (hasWon) {
    return <div>GAME WON</div>;
  }

  if (guessCount === 6) {
    return <div>GAME Over</div>;
  }

  return null;
}

export default WinLossOverlay;
