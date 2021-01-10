import React from 'react';

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

import {dialogsMock, messagesMock} from "./Diaglogs.mock";

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

const renderMessages = () => messagesMock
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

export const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      {renderDialogList()}
    </div>
    <div className={s.messages}>
      {renderMessages()}
    </div>
  </div>
);
