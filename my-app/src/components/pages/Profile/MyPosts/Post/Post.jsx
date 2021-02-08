import React from "react";

import Like from '../../../../../assets/images/thumbs-up.svg'
import disLike from '../../../../../assets/images/thumbs-down.svg'

import s from './Post.module.css'


const Post = ({message, likesCount, date, imgUser,addDislike,addLike}) => {

  return (
    <div className={s.item}>
      <div className={s.userPost}>
        <img
          src={imgUser}
          alt="user"/>
        <span>
          {message}
        </span>
      </div>
      <div className={s.informationPost}>
        <div className={s.likePost}>
          <div className='add-like'>
            <img
              src={Like}
              alt="likes"
              onClick={addLike}/>
            <span>
            {likesCount}
          </span>
          </div>
          <div className='add-dislike'>
            <img
              src={disLike}
              alt="dislikes"
              onClick={addDislike}/>
            <span>
            {likesCount}
          </span>
          </div>
        </div>
        <span>
          {
            date.toLocaleTimeString()
          }
        </span>
      </div>
    </div>
  )
};
export default Post