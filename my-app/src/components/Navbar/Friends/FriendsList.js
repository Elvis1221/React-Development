import React from "react";

import {Friend} from "./Friend";

import s from "./friends.module.css";


export const FriendsList = ({friends}) => (
  <div className={s.friendsWrap}>
    <span className={s.textFriendsList}>
      <h3>Мои друзья :</h3>
    </span>
    <div className={s.friends}>

      {
        friends.map((item, index) =>
          <Friend
            key={index}
            name={item.name}
            userImg={item.userImg}
            id={item.id}
          />
        )}
    </div>
  </div>
);

