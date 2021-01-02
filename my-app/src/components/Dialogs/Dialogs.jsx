import React from 'react';
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`'/dialogs/' ${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>

    )
}

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Elvis' id='1'/>
                <DialogItem name='Dinam' id='2'/>
                <DialogItem name='Smouk' id='3'/>
                <DialogItem name='Zik' id='4'/>
                <DialogItem name='Rita' id='5'/>
            </div>
            <div className={s.messages}>
                <Messages message='hi'/>
                <Messages message='how a yuo?'/>
                <Messages message='Nice'/>
            </div>
        </div>
    )
};