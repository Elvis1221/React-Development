import React from "react";

import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reduser";

import MyPosts from "./MyPosts";


const MyPostsContainer = ({dispatch,posts,newPostText}) => {
  const addNewPost = () => dispatch(addNewPostActionCreator());

  const onPostChange = text => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action)
  };
  return (
    <MyPosts updateNewPostText={onPostChange}
             addNewPost={addNewPost}
             posts={posts}
             newPostText={newPostText}
    />
  )
};
export default MyPostsContainer


