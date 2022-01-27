import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import GameBoard from './GameBoard/GameBoard';
import Keyboard from './Keyboard/Keyboard';
import WinLossOverlay from './WinLossOverlay/WinLossOverlay';

import css from './App.module.css';

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [wordOfDay, setWordOfDay] = useState('WHACK');
  const [lettersUsed, setLettersUsed] = useState(new Set());
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  const handleSettingLettersUsed = (guess) => {
    setLettersUsed((prevLettersUsed) => {
      return new Set([...prevLettersUsed, guess.toLowerCase().split('')]);
    });
  };

  const handleSettingGuesses = (guess) => {
    const wordOfDayArray = wordOfDay.toLowerCase().split('');
    const guessArray = guess.toLowerCase().split('');

    const formattedGuess = guessArray.map((letter, index) => {
      const isPresent = wordOfDayArray.includes(letter);
      return {
        index,
        letter,
        isPresent,
        isCorrect: isPresent && wordOfDayArray[index] === letter,
      };
    });

    setGuesses((prevGuesses) => {
      return [...prevGuesses, formattedGuess];
    });
  };

  const submitGuess = (guess) => {
    if (guesses.length === 6) {
      // Game Over
      return;
    }
    setCurrentGuess('');
    handleSettingGuesses(guess);
    handleSettingLettersUsed(guess);

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
        lettersUsed={Array.from(lettersUsed)}
        guesses={guesses}
        currentGuess={currentGuess}
      />
      <Keyboard
        guesses={guesses}
        submitGuess={submitGuess}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <WinLossOverlay hasWon={hasWon} guessCount={guesses.length} />
    </div>
  );
}

export default App;
