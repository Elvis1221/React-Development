import React from 'react';
import s from './../dialogs.module.css'

export const Messages = ({message, user,serverMessage,serverUser}) => {
    return (
        <div className={s.message}>
            <div className={s.sererUser}>
                <img src={serverUser} alt=""/>
                {serverMessage}
            </div>
            <div className={s.user}>
                <img src={user} alt=""/>
                {message}
            </div>

        </div>
    )
};
