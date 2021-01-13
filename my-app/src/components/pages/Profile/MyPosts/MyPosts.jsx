import React from "react";

import Post from "./Post/Post";

import s from './MyPosts.module.css'


const MyPosts = ({posts, newPostText, updateNewPostText, addPost}) => {

  const newPostElement = React.createRef();

  let addNewPost = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text)
  };

  return (
    <div className={s.mypost}>
      <h3>Написать пост :</h3>
      <div className={s.post}>
        <div className={s.textarea}>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={newPostText}/>
        </div>
        <div className={s.addButton}>
          <button onClick={addNewPost}>
            Add post
          </button>
        </div>
        <div className={s.post}>
          {
            posts.map(({message,LikesCount,date}, index) =>
              <Post
                key={index}
                message={message}
                count={LikesCount}
                date={date}
              />)
          }
        </div>
      </div>
    </div>
  )
};
export default MyPosts
