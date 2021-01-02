import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.mypost}>
        My posts
        <div className={s.posts}>
            <div className={s.textarea}>
                <textarea name="New post" id="" cols="10" rows="2"></textarea>
            </div>
            <div className={s.addButton}>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message='hi,how are post' count='15'/>
                <Post message='my next post' count='20'/>
            </div>

        </div>
    </div>
};
export default MyPosts