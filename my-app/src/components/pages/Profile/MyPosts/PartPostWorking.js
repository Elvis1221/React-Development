import React from 'react'
import s from "./MyPosts.module.css";


export const PartPostWorking =({onPostChange,newPostText,onAddPost,newPostElement})=> {

  return(
    <div className={s.wrapperPost}>
      <h3>Написать пост :</h3>
      <textarea
        className={s.inputPost}
        onChange={onPostChange}
        ref={newPostElement}
        value={newPostText}
      />
      <button
        className={s.buttonAddPost}
        onClick={onAddPost}>
        Добавить пост
      </button>
    </div>
  )
};