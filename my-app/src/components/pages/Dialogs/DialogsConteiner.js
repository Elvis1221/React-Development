import React, {useState} from 'react';

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {dialogsUsersMock} from "./Diaglogs.mock";

import Dialogs from "./Dialogs";


const renderDialogList = () =>(
  dialogsUsersMock.map(({name, id, userImg}, index) =>
    <DialogItem
      key={index}
      name={name}
      id={id}
      img={userImg}
    />
  ));

const renderMessages = items => (
  items.map(({server, local}, index) =>
    <Message
      key={index}
      // serverMessage={server.message}
      // serverId={server.id}
      // serverUser={server.userImg}
      message={local.message}
      id={local.id}
      user={local.userImg}
    />
  ));

const DialogsContainer = () => {
  const [messages, setMessages] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  const onWriteMessage = (e) => setWriteMessage(e.target.value);

  const addMessage = () => {
    setMessages(() => {
        return [
          ...messages,
          {
            local: {
              id: 1,
              userImg: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
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

export {DialogsContainer}