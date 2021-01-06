import React from "react";
import s from './friends.module.css'
import {NavLink} from "react-router-dom";

export const Friends = ({name, userImg, id}) => {
    return (
        <div className={s.friendsItem}>
            <img src={userImg} alt=""/>
            <NavLink to={`/Profile/ ${id}`}>
                {name}
            </NavLink>
        </div>
    )
};
