import React from "react";
import s from './Post.module.css'

const Post = ({message, count}) => {
    return <div className={s.item}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKbu8z0yxaCcLGx9BjbD_26DcjSyuF9B8DA&usqp=CAU"
            alt=""/>
        {message}
        <div>
            <span className={s.likePost}>
                <img src="https://pngicon.ru/file/uploads/serdce-256x237.png" alt=""/>
                {count}
            </span>
        </div>
    </div>

};
export default Post