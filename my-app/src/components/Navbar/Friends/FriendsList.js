import React from "react";

import {Friend} from "./Friends";

import s from "./friends.module.css";


export const FriendsList = ({friends}) => (
  <div className={s.friends}>
    {friends.map((item, index) =>
      <Friend
        key={index}
        name={item.name}
        userImg={item.userImg}
        id={item.id}
      />
    )}
  </div>
);

