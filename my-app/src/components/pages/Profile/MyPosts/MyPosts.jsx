import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({posts}) => {
  return <div className={s.mypost}>
    My posts
    <div className={s.posts}>
      <div className={s.textarea}>
                <textarea name="New post" id="" cols="10" rows="2">
                </textarea>
      </div>
      <div className={s.addButton}>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {
          posts.map((p, index) => <Post key={index} message={p.message} count={p.LikesCount}/>)
        }
      </div>
    </div>
  </div>
};
export default MyPosts
