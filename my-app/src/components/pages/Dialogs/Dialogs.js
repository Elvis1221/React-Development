import React, {useState} from 'react';

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {dialogsMock} from "./Diaglogs.mock";

import s from './dialogs.module.css'

const renderDialogList = () =>
  dialogsMock.map(({name, id, userImg}, index) =>
    <DialogItem
      key={index}
      name={name}
      id={id}
      img={userImg}
    />
  );

const renderMessages = items =>
  items.map(({server, local}, index) =>
    <Message
      key={index}
      serverMessage={server.message}
      serverId={server.id}
      serverUser={server.user}
      message={local.message}
      id={local.id}
      user={local.user}
    />
  );

const DialogsContainer = () => {
  const [messages, setMessages] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  const onWriteMessage = (e) => setWriteMessage(e.target.value);
  const addMessage = () => {
    setMessages(() => {
        return [
          ...messages,
          {
            server: {
              id: 1,
              user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
              message: 'Здарова братка! Как дела? Что нового?',
            },
            local: {
              id: 1,
              user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
              message: writeMessage
            }
          }
        ]
      }
    )
  };

  const messagesList = renderMessages(messages);
  const dialogsList = renderDialogList();

  return (
    <Dialogs
      messagesList={messagesList}
      dialogsList={dialogsList}
      onClick={addMessage}
      onChange={onWriteMessage}
    />
  )
};
// вынести в новый файл
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
export {DialogsContainer}