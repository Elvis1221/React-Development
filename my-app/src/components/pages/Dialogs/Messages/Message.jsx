import React from 'react';

import s from './messages.module.css'


export const Message = ({message, user, serverMessage, serverUser}) => (
  <div className={s.message}>
    <div className={s.serverUser}>
      <img src={serverUser} alt="test"/>
      <span className={s.colorMessage}>
        {serverMessage}
      </span>
    </div>
    <div className={s.localUser}>
      <img src={user} alt="test"/>
      <span className={s.colorMessage}>
        {message}
      </span>
    </div>
  </div>
);
