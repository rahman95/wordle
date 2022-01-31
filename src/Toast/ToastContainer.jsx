import React from 'react';
import Toast from './Toast';

import css from './Toast.module.css';

function ToastContainer({ toastMessages }) {
  return (
    <div className={css.toastContainer}>
      {toastMessages.map((message) => (
        <Toast key={message} message={message} />
      ))}
    </div>
  );
}

export default ToastContainer;
