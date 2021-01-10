import React from 'react';
import s from '../dialogs.module.css'

export const Message = ({message, user, serverMessage, serverUser}) => (
  <div className={s.message}>
    <div className={s.sererUser}>
      <img src={serverUser} alt="test"/>
      <span>{serverMessage}</span>
    </div>
    <div className={s.user}>
      <img src={user} alt="test"/>
      {message}
    </div>
  </div>
);
