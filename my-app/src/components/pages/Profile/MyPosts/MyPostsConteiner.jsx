import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reduser";
import {MyPosts} from "./MyPosts";


const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const {postsObj, newPostText} = useSelector(state => state.profilePage);

  const addNewPost = () => dispatch(addNewPostActionCreator());

  const updateNewPostText = text => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action)

  };
  return (
    <MyPosts posts={postsObj}
             newPostText={newPostText}
             updateNewPostText={updateNewPostText}
             addNewPost={addNewPost}
    />
  )
};

export default MyPostsContainer


