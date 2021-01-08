import React from 'react';
import s from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = ({dialogs}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogs.dialogObj.map(d =>
                        <DialogItem
                            name={d.name}
                            id={d.id}
                            img={d.userImg}
                        />)
                }
            </div>
            <div className={s.messages}>
                {
                    dialogs.messageObj
                        .map(m =>
                            <Messages
                                serverMessage={m.server.message}
                                serverId={m.server.id}
                                serverUser={m.server.user}
                                message={m.local.message}
                                id={m.local.id}
                                user={m.local.user}
                            />)
                }
            </div>
        </div>
    )
};