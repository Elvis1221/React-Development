import React from "react";
import {NavLink} from "react-router-dom";

import s from './friends.module.css'

export const Friend = ({name, userImg, id}) => (
  <div className={s.friendsItem}>
    <img src={userImg} alt=""/>
    <NavLink to={`/Profile/${id}`}>{name}</NavLink>
  </div>
);
