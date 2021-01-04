import React from 'react';
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";
// import {dialogObj, messageObj} from "../../index";

const DialogItem = ({id, name}) => {
    return (
        <div className={s.dialogsItems}>
            <NavLink to={`/Dialogs/ ${id}`} activeClassName={s.activeLink}>{name}</NavLink>
        </div>
    )
};

const Messages = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
};
export const Dialogs = ({dialog,message}) => {
    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItems} ${s.active}`}>
                {
                    dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    message.map(m => <Messages message={m.message}/>)
                }
            </div>
        </div>
    )
};