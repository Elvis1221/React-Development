import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = ({profilePage, addPost, updateNewPostText, date}) => {
  return <div>
    <ProfileInfo/>
    <MyPosts posts={profilePage.postsObj}
             newPostText={profilePage.newPostText}
             updateNewPostText={updateNewPostText}
             addPost={addPost}
             />

  </div>
};
