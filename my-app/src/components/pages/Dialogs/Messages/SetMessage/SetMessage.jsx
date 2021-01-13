import React from 'react';

import s from './setmessages.module.css'


export const SetMessage = () => {
  const newMessage = React.createRef();

  const addMessage = () => {
    const text = newMessage.current.value;
    alert(text)
  }

  return (
    <div className={s.setMessage}>
      <textarea ref={newMessage}></textarea>
      <button onClick={addMessage}>Отправить</button>
    </div>
  );
};
