import React, {useState} from 'react';

import {DialogItem} from "./DialogItem/DialogItem";
// import {SetMessage} from "./Messages/SetMessage/SetMessage";
import {Message} from "./Messages/Message";
import {dialogsMock} from "./Diaglogs.mock";

import s from './dialogs.module.css'


const renderDialogList = () => dialogsMock
  .map(({name, id, userImg}, index) =>
    <DialogItem
      key={index}
      name={name}
      id={id}
      img={userImg}
    />
  );

const renderMessages = (item) => item
  .map(({server, local}, index) =>
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

export const Dialogs = () => {
  const [messages, setMessages] = useState([]);
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
              message: 'Хай братка! Все нормально,из  нового... Учу инглиш) А ты чем занимаешься?'
            }
          }
        ]
      }
    )
  };

  return (
    <div className={s.wrapperDialogs}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {renderDialogList()}
        </div>
        <div className={s.messages}>
          {renderMessages(messages)}
        </div>
      </div>
      <button className={s.buttonAddMessage} onClick={ addMessage}> добавить сообщение</button>

      {/*<SetMessage/>*/}
    </div>);
};

