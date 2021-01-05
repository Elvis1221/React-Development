import React from 'react';
import s from './../dialogs.module.css'

export const Messages = ({message,img}) => {
    return (
        <div className={s.message}>
            <img src={img} alt=""/>
            {message}
        </div>
    )
};
