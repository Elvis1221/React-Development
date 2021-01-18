import React from 'react';

import s from './messages.module.css'


export const Message = ({message, user}) => (
  <div className={s.message}>
    <div className={s.serverUser}>
      <img src={user} alt="test"/>
      <span className={s.colorMessage}>
        {message}
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
