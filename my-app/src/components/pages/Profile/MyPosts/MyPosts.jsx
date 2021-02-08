import React from "react";

import Post from "./Post/Post";

import s from './MyPosts.module.css'
import {PartPostWorking} from "./PartPostWorking";


export const MyPosts = ({posts, newPostText, updateNewPostText, addNewPost, addDislike, addLike, likesCount}) => {
  const newPostElement = React.createRef();

  const onAddPost = () => {
    addNewPost();
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text)
  };
  return (
    <div className={s.wrapperProfile}>
      <PartPostWorking {...{
        newPostElement,
        newPostText,
        onAddPost,
        onPostChange,
      }}
      />
      <div className={s.post}>
        <h3>Мои записи :</h3>
        {
          posts.map(({message, date, imgUser}, index) =>
            <Post
              key={index}
              message={message}
              date={date}
              likesCount={likesCount}
              imgUser={imgUser}
              addDislike={addDislike}
              addLike={addLike}
            />)
        }
      </div>
    </div>
  )
};
