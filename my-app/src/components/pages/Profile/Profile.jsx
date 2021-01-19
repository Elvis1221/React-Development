import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = ({profilePage, dispatch}) => {
  return <div>
    <ProfileInfo/>
    <MyPosts posts={profilePage.postsObj}
             newPostText={profilePage.newPostText}
             dispatch={dispatch}
             />

  </div>
};
