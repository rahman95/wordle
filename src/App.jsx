import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Header from './Header/Header';
import ToastContainer from './Toast/ToastContainer';
import GameBoard from './GameBoard/GameBoard';
import Keyboard from './Keyboard/Keyboard';
import WinLossOverlay from './WinLossOverlay/WinLossOverlay';
import wordList from './words.json';

import css from './App.module.css';

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [wordOfDay, setWordOfDay] = useState('');
  const [lettersUsed, setLettersUsed] = useState(new Set());
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [toastMessages, setToastMessages] = useState([]);

  useEffect(() => {
    const startDate = dayjs('2021-06-19'); // When WORDLE started
    const diff = dayjs().diff(startDate, 'day');
    const randomWord = wordList.words[diff];

    console.log(randomWord);
    setWordOfDay(randomWord);
  }, []);

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
      const isCorrect = isPresent && wordOfDayArray[index] === letter;
      return {
        index,
        letter,
        isPresent,
        isCorrect,
        isAbsent: !isPresent && !isCorrect,
      };
    });

    setGuesses((prevGuesses) => {
      return [...prevGuesses, formattedGuess];
    });
  };

  const isValidWord = (guess) => wordList.words.some((x) => x === guess);
  const isValidGuess = (guess) => wordList.guesses.some((x) => x === guess);
  const isValid = (guess) => {
    if (isValidWord(guess)) {
      return true;
    }
    if (isValidGuess(guess)) {
      return true;
    }
    return false;
  };

  const setToast = (message) => {
    setToastMessages((prevMessages) => [...prevMessages, message]);
    setTimeout(() => {
      setToastMessages((prevMessages) => prevMessages.slice(0, -1));
    }, 1500);
  };

  const submitGuess = (guess) => {
    if (currentGuess.length !== 5) {
      setToast('Not enough letters!');
      return;
    }

    if (guesses.length === 6) {
      // Game Over
      return;
    }

    if (!isValid(guess)) {
      setToast('Not a valid word!');
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

  const generateShareArt = () => {
    if (guesses.length === 0) {
      return null;
    }

    const art = guesses
      .map((guess) =>
        guess
          .map((letter) => {
            if (letter.isCorrect) {
              return '🟩';
            }
            if (letter.isPresent) {
              return '🟨';
            }
            if (letter.isAbsent) {
              return '⬛️';
            }
            return null;
          })
          .join('')
      )
      .join('\n');

    navigator.clipboard.writeText(art);
    console.log('Copied the text');

    return null;
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className={css.App}>
      <Header />
      <ToastContainer toastMessages={toastMessages} />
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
      <WinLossOverlay
        hasWon={hasWon}
        hasFinished={guesses.length === 6}
        wordOfDay={wordOfDay}
        generateShareArt={generateShareArt}
        refreshPage={refreshPage}
      />
    </div>
  );
}

export default App;
