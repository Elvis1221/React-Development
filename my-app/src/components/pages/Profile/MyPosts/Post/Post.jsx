import React, {useState} from "react";

import s from './Post.module.css'


const Post = ({message, value, imgCount, date, imgUser}) => {
  const [counter, setCounter] = useState(value);

  const upCounter = () => setCounter(counter + 1);


  return (
    <div className={s.item}>
      <div className={s.userPost}>
        <img
          src={imgUser}
          alt=""/>
        <span>
          {message}
        </span>
      </div>
      <div className={s.informationPost}>
        <div className={s.likePost}>
          <img src={imgCount}
               alt="likes"
               onClick={upCounter}/>
          <span>
            {counter}
          </span>
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