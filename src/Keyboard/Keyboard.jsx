import React from 'react';
import css from './Keyboard.module.css';

function Keyboard() {
  return (
    <section className={css.keyboard}>
      <span>QWERTYUIOP</span>
      <span>ASDFGHJKL</span>
      <span>ZXCVBNM</span>
    </section>
  );
}

export default Keyboard;
