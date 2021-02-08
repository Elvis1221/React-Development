import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {MyPosts} from "./MyPosts";
import {addLikeAC, addDislikeAC} from "../../../../redux/couner-reduser";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reduser";


const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const {postsObj, newPostText} = useSelector(state => state.profilePage);
  const {likesCount} = useSelector(state => state.counter);

  const addLike = () => dispatch(addLikeAC());
  const addDislike = () => dispatch(addDislikeAC());
  const addNewPost = () => dispatch(addNewPostActionCreator());
  const updateNewPostText = text => dispatch(updateNewPostTextActionCreator(text));

  return (
    <MyPosts {...{
      posts: postsObj,
      newPostText,
      likesCount,
      updateNewPostText,
      addNewPost,
      addDislike,
      addLike
    }}
    />
  )
};

export default MyPostsContainer


