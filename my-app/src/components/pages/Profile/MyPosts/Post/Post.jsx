import React from "react";
import s from './Post.module.css'

const Post = ({message, count, date}) => {

  return (
    <div className={s.item}>
      <div className={s.userPost}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKbu8z0yxaCcLGx9BjbD_26DcjSyuF9B8DA&usqp=CAU"
          alt=""/>
        <span>{message}</span>
      </div>
      <div className={s.informationPost}>
        <div className={s.likePost}>
          <img src="https://pngicon.ru/file/uploads/serdce-256x237.png" alt=""/>
          <span>{count}</span>
        </div>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    </div>
  )
};
export default Post