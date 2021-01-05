import React from "react";
// import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({profile}) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={profile.postsObj}/>
    </div>
};
