import React from 'react';
import Keys from './Keys/Keys';
import SubmitKey from './Keys/SubmitKey';
import DeleteKey from './Keys/DeleteKey';

import css from './Keyboard.module.css';

function Keyboard({ lettersUsed, submitGuess }) {
  return (
    <section className={css.keyboard}>
      <Keys letters={'QWERTYUIOP'} lettersUsed={lettersUsed} />
      <Keys letters={'ASDFGHJKL'} lettersUsed={lettersUsed} />
      <Keys
        letters={'ZXCVBNM'}
        lettersUsed={lettersUsed}
        adornmentStart={<SubmitKey />}
        adornmentEnd={<DeleteKey />}
      />
    </section>
  );
}

export default Keyboard;
