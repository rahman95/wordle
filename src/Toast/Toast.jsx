import React, { useState } from 'react';

import css from './Toast.module.css';

function Toast({ message = 'A notification message..' }) {
  return (
    <div className={css.toast}>
      <span className={css.text}>{message}</span>
    </div>
  );
}

export default Toast;
