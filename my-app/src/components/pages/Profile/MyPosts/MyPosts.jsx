import React from "react";

import Post from "./Post/Post";

import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

import s from './MyPosts.module.css'


const MyPosts = ({posts, newPostText, dispatch}) => {

  const newPostElement = React.createRef();

  const addNewPost = () => dispatch(addNewPostActionCreator());
  const onPostChange = () => {
    const text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <div className={s.wrapperProfile}>
      <h3>Написать пост :</h3>
      <div className={s.wrapperPost}>
          <textarea className={s.inputPost} onChange={onPostChange}
                    ref={newPostElement}
                    value={newPostText}/>
        <button className={s.buttonAddPost} onClick={addNewPost}>
          Добавить пост
        </button>
      </div>
      <div className={s.post}>
        <div>Мои записи :</div>
        {
          posts.map(({message, LikesCount, date}, index) =>
            <Post
              key={index}
              message={message}
              count={LikesCount}
              date={date}
            />)
        }
      </div>
    </div>
  )
};
export default MyPosts
