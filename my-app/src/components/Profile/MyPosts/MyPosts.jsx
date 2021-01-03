import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsObj} from "./Post/postObj/postObj";

const MyPosts = () => {
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
                    postsObj.map((post) => <Post message={post.message} count={post.LikesCount}/>)
                }
            </div>

        </div>
    </div>
};
export default MyPosts