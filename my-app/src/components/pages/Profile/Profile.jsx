import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";


export const Profile = ({profilePage, dispatch}) =>(
  <div>
    <ProfileInfo/>
    <MyPostsContainer posts={profilePage.postsObj}
                      newPostText={profilePage.newPostText}
                      dispatch={dispatch}
    />
  </div>
  );


