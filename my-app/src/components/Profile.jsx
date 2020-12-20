import React from "react";
import s from './Profile.module.css'

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
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU"
                 alt=""
            />
        </div>
        <div className={s.mypost}>
            My post
            <div className={s.posts}>
                New post
                <div className={`${s.item} ${s.gold}`}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    </div>

};
export default Profile