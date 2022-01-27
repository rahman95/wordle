import React from 'react';
import Keys from './Keys/Keys';
import SubmitKey from './Keys/SubmitKey';
import DeleteKey from './Keys/DeleteKey';

import css from './Keyboard.module.css';

function Keyboard({
  wordOfDay,
  currentGuess,
  setCurrentGuess,
  lettersUsed,
  submitGuess,
}) {
  return (
    <section className={css.keyboard}>
      <Keys
        wordOfDay={wordOfDay}
        letters={'QWERTYUIOP'}
        lettersUsed={lettersUsed}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <Keys
        wordOfDay={wordOfDay}
        letters={'ASDFGHJKL'}
        lettersUsed={lettersUsed}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <Keys
        wordOfDay={wordOfDay}
        letters={'ZXCVBNM'}
        lettersUsed={lettersUsed}
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
