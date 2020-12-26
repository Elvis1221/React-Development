import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img className={s.profileCont}
                 src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
                 alt=""
            />
        </div>
        <div>
            <img className={s.profileLog}
                 src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-fitness-badge-sport-logo-png-image_5393352.jpg"
                 alt=""
            />
        </div>
        <MyPosts/>

    </div>

};
export default Profile