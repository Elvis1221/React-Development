import React from 'react';

import s from './dialogs.module.css'

 const Dialogs = ({dialogsList, messagesList, onClick, onChange}) => (
  <div className={s.wrapperDialogs}>
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsList}
      </div>
      <div className={s.messages}>
        {messagesList}
      </div>
    </div>
    <div className={s.formAddMessage}>
      <div>
           <textarea
             className={s.inputMessage}
             onChange={onChange}
           />
      </div>
      <div>
        <button className={s.buttonMessage} onClick={onClick}>
          Отправить
        </button>
      </div>
    </div>
  </div>
);

export default Dialogs
