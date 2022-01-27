import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import GameBoard from './GameBoard/GameBoard';
import Keyboard from './Keyboard/Keyboard';

import css from './App.module.css';

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [wordOfDay, setWordOfDay] = useState('WHACK');
  const [lettersUsed, setLettersUsed] = useState(new Set());
  const [currentGuess, setCurrentGuess] = useState('');
  const [guessNumber, setGuessNumber] = useState(0);
  const [guesses, setGuesses] = useState([]);

  console.log({ guesses, guessNumber, lettersUsed, hasWon });

  const submitGuess = (guess) => {
    if (guessNumber === 6) {
      // Game Over
      return;
    }
    setGuessNumber(guessNumber + 1);
    setGuesses([...guesses, guess]);
    const letters = guess.toLowerCase().split('');
    setLettersUsed((_) => new Set([...lettersUsed, ...letters]));

    if (wordOfDay.toLowerCase() === guess.toLowerCase()) {
      console.log('GAME WON');
      setHasWon(true);
    }
  };

  return (
    <div className={css.App}>
      <Header />
      <GameBoard
        wordOfDay={wordOfDay}
        lettersUsed={lettersUsed}
        guesses={guesses}
        currentGuess={currentGuess}
      />
      <Keyboard
        lettersUsed={lettersUsed}
        submitGuess={submitGuess}
        setCurrentGuess={setCurrentGuess}
      />
    </div>
  );
}

export default App;
