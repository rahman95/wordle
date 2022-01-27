import React from 'react';
import css from './GameBoard.module.css';

function GameBoard() {
  return (
    <section className={css.gameBoard}>
      <span>⬛️ ⬛️ 🟨 ⬛️ ⬛️</span>
      <span>⬛️ ⬛️ ⬛️ 🟨 ⬛️</span>
      <span>⬛️ 🟩 ⬛️ 🟩 🟩</span>
      <span>🟩 🟩 🟩 🟩 🟩</span>
      <span>⬛️ ⬛️ ⬛️ ⬛️ ⬛️</span>
      <span>⬛️ ⬛️ ⬛️ ⬛️ ⬛️</span>
    </section>
  );
}

export default GameBoard;
