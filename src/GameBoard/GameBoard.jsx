import css from "./GameBoard.module.css";

const GameBoard = ({}) => {
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
};

export default GameBoard;
