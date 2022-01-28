import React from 'react';
import Keys from './Keys/Keys';
import SubmitKey from './Keys/SubmitKey';
import DeleteKey from './Keys/DeleteKey';

import css from './Keyboard.module.css';

function Keyboard({ guesses, submitGuess, currentGuess, setCurrentGuess }) {
  const correctLetters = new Set();
  const presentLetters = new Set();
  const usedLetters = new Set();
  guesses.forEach((guess) => {
    guess.forEach(({ letter, isPresent, isCorrect }) => {
      if (isCorrect) {
        correctLetters.add(letter);
        return;
      }
      if (isPresent) {
        presentLetters.add(letter);
        return;
      }
      usedLetters.add(letter);
    });
  });

  return (
    <section className={css.keyboard}>
      <Keys
        correctLetters={correctLetters}
        presentLetters={presentLetters}
        usedLetters={usedLetters}
        letters="QWERTYUIOP"
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <Keys
        correctLetters={correctLetters}
        presentLetters={presentLetters}
        usedLetters={usedLetters}
        letters="ASDFGHJKL"
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <Keys
        correctLetters={correctLetters}
        presentLetters={presentLetters}
        usedLetters={usedLetters}
        letters="ZXCVBNM"
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        adornmentStart={
          <SubmitKey currentGuess={currentGuess} submitGuess={submitGuess} />
        }
        adornmentEnd={
          <DeleteKey
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
          />
        }
      />
    </section>
  );
}

export default Keyboard;
