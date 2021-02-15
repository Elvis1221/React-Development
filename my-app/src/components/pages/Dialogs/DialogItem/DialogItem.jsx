import React from 'react';
import s from '../dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = ({id, name, img}) => {
    return (
        <div className={s.dialogsItem}>
            <img src={img} alt=""/>
            <NavLink to={`/Dialogs/${id}`} activeClassName={s.activeLink}>
                {name}
            </NavLink>
        </div>
    )
};

