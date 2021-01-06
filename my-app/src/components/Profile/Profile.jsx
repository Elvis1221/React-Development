import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({profile}) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={profile.postsObj}/>
    </div>
};
