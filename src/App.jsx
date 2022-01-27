import React from 'react';
import Header from './Header/Header';
import GameBoard from './GameBoard/GameBoard';
import Keyboard from './Keyboard/Keyboard';

import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <Header />
      <GameBoard />
      <Keyboard />
    </div>
  );
}

export default App;
